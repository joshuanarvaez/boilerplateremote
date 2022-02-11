const {
  client,
  createUser,
  getAllUsers,
  createPost,
  createTags,
  getPostById,
  getUserByUsername,
  getUserById,
  getAllPosts,
  addTagsToPost
  // declare your model imports here
  // for example, User
} = require('./');
// const { client } = require('./index');

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    // have to make sure to drop in correct order
    await client.query(`
      DROP TABLE IF EXISTS post_tags;
      DROP TABLE IF EXISTS tags;
      DROP TABLE IF EXISTS posts;
      DROP TABLE IF EXISTS users;
    `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        location varchar(255) NOT NULL,
        active boolean DEFAULT true
      );
      CREATE TABLE posts (
        id SERIAL PRIMARY KEY, 
        product varchar(255) NOT NULL, 
        description varchar(255) NOT NULL,
        price TEXT NOT NULL,
        active BOOLEAN DEFAULT true
      );
      CREATE TABLE tags (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL
      );
      CREATE TABLE post_tags (
        "postid" INTEGER REFERENCES posts(id),
        "tagId" INTEGER REFERENCES tags(id),
        UNIQUE ("postid", "tagId")
      );
    `);

    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}
async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    await createUser({
      username: 'albert',
      password: 'bertie99',
      name: 'Al Bert',
      location: 'Sidney, Australia'
    });
    await createUser({
      username: 'sandra',
      password: '2sandy4me',
      name: 'Just Sandra',
      location: 'Ain\'t tellin\''
    });
    await createUser({
      username: 'glamgal',
      password: 'soglam',
      name: 'Joshua',
      location: 'Upper East Side'
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}
async function createInitialPosts() {
  try {
    console.log("Starting to create posts...");
    await createPost({
      id: "1",
      product: "Bananas",
      description: "Best bananas money can buy",
      price: ["$50"],
      tags: ['tropical']
    });

    await createPost({
      id: "2",
      product: "Apples",
      description: "Best apples money can buy",
      price: ["$50"],
      tags: ['stonefruit']
    });

    await createPost({
      id: "3",
      product: "Kiwis",
      description: "Best kiwis money can buy",
      price: ["$50"],
      tags: ["tropical"]
    });
    await createPost({
      id: "4",
      product: "Grapes",
      description: "Best grapes money can buy",
      price: ["$50"],
      tags: ["berries"]
    });
    await createPost({
      id: "5",
      product: "Strawberries",
      description: "Best strawberries money can buy",
      price: ["$50"],
      tags: ["berries"]
    });
    await createPost({
      id: "6",
      product: "Pomegranates",
      description: "Best pomegranates money can buy",
      price: ["$50"],
      tags: ["citrus"]
    });
    await createPost({
      id: "7",
      product: "Oranges",
      description: "Best oranges money can buy",
      price: ["$50"],
      tags: ["citrus"]

    });
    console.log("Finished creating posts!");
  } catch (error) {
    console.log("Error creating posts!");
    throw error;
  }
}




// async function buildTables() {
//   try {
//     client.connect();

//     // drop tables in correct order

//     // build tables in correct order
//   } catch (error) {
//     throw error;
//   }
// }


// async function populateInitialData() {
//   try {
//     // create useful starting data by leveraging your
//     // Model.method() adapters to seed your db, for example:
//     // const user1 = await User.createUser({ ...user info goes here... })
//   } catch (error) {
//     throw error;
//   }
// }
async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialPosts();
  } catch (error) {
    console.log("Error during rebuildDB")
    throw error;
  }
}

async function testDB() {
  try {
    // connect the client to the database, finally
    client.connect();

    // queries are promises, so we can await them
    const result = await client.query(`SELECT * FROM users, posts, tags;`);

    // for now, logging is a fine way to see what's up
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    // it's important to close out the client connection
    client.end();
  }
}
// buildTables()
//   .then(populateInitialData)
//   testDB()
//   .catch(console.error)
//   .finally(() => client.end());

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());