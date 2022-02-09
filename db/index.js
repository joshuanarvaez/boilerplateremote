const client = require('./client');
const models = require('./models');

async function createUser({ 
  username, 
  password,
  name,
  location
}) {
  try {
    const { rows: [ user ] } = await client.query(`
      INSERT INTO users(username, password, name, location) 
      VALUES($1, $2, $3, $4) 
      ON CONFLICT (username) DO NOTHING 
      RETURNING *;
    `, [username, password, name, location]);

    return user;
  } catch (error) {
    throw error;
  }
}
async function getAllUsers() {
  try {
    const { rows } = await client.query(`
      SELECT id, username, name, location, active 
      FROM users;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}
async function createPost({
  id,
  product,
  description,
  price,
  tags = [""]
}) {
  try {
    const { rows: [ post ] } = await client.query(`
      INSERT INTO posts(id, product, description, price) 
      VALUES($1, $2, $3, $4)
      RETURNING *;
    `, [id, product, description, price]);

    const tagList = await createTags(tags);

    return await addTagsToPost(post.id, tagList);
  } catch (error) {
    console.log("error in createPost")
    throw error;
  }
}
async function createTags(tagList) {
  if (tagList.length === 0) {
    return;
  }

  const valuesStringInsert = tagList.map(
    (_, index) => `$${index + 1}`
  ).join('), (');

  const valuesStringSelect = tagList.map(
    (_, index) => `$${index + 1}`
  ).join(', ');

  try {
    // insert all, ignoring duplicates
    await client.query(`
      INSERT INTO tags(name)
      VALUES (${ valuesStringInsert })
      ON CONFLICT (name) DO NOTHING;
    `, tagList);

    // grab all and return
    const { rows } = await client.query(`
      SELECT * FROM tags
      WHERE name
      IN (${ valuesStringSelect });
    `, tagList);

    return rows;
  } catch (error) {
    console.log("error in createTags")
    throw error;
  }
}
async function getAllPosts() {
  try {
    const { rows: postIds } = await client.query(`
      SELECT id
      FROM posts;
    `);

    const posts = await Promise.all(postIds.map(
      post => getPostById( post.id )
    ));

    return posts;
  } catch (error) {
    throw error;
  }
}
async function getUserById(userId) {
  try {
    const { rows: [ user ] } = await client.query(`
      SELECT id, username, name, location, active
      FROM users
      WHERE id=${ userId }
    `);

    if (!user) {
      return null
    }

    user.posts = await getPostsByUser(userId);

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const { rows: [user] } = await client.query(`
      SELECT *
      FROM users
      WHERE username=$1;
    `, [username]);

    return user;
  } catch (error) {
    throw error;
  }
}


async function getPostById(postId) {
  try {
    const { rows: [ post ]  } = await client.query(`
      SELECT *
      FROM posts
      WHERE id=$1;
    `, [postId]);

    if (!post) {
      throw {
        name: "PostNotFoundError",
        message: "Could not find a post with that id"
      };
    }

    const { rows: tags } = await client.query(`
      SELECT tags.*
      FROM tags
      JOIN post_tags ON tags.id=post_tags."tagId"
      WHERE post_tags."postid"=$1;
    `, [postId])

    const { rows: [id] } = await client.query(`
      SELECT id, username, name, location
      FROM users
      WHERE id=$1;
    `, [post.productId])

    post.tags = tags;
    post.productId = id;

    delete post.productId;

    return post;
  } catch (error) {
    throw error;
  }
}
async function addTagsToPost(id, tagList) {
  try {
    const createPostTagPromises = tagList.map(
      tag => createPostTag(id, tag.id)
    );

    await Promise.all(createPostTagPromises);

    return await getPostById(id);
  } catch (error) {
    console.log("error in addTagsToPost")
    throw error;
  }
}
async function createPostTag(postid, tagId) {
  try {
    await client.query(`
      INSERT INTO post_tags("postid", "tagId")
      VALUES ($1, $2)
      ON CONFLICT ("postid", "tagId") DO NOTHING;
    `, [postid, tagId]);
  } catch (error) {
    console.log("error in createPostTag")
    throw error;
  }
}


module.exports = {
  client,
  ...models,
  createUser,
  createPost,
  getAllUsers,
  createTags,
  getAllPosts,
  getPostById,
  getUserByUsername,
  getUserById,
  addTagsToPost
};
