export const BASE_URL = "http://localhost:4000/api";


const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
}

export const fetchAllPosts = async () => {
    try{
        const response = await fetch(`${BASE_URL}/posts`, {
            methods: "GET",
            header: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json()
        return data.posts
    }catch (error) {
        console.log("An error occured fetching posts")
        throw(error)
    }
}

export const fetchAllTags = async () => {
    // const token = getTokenFromLocalStorage();
  
    try {
      const response = await fetch(`${BASE_URL}/tags`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data.tags;
    } catch (error) {
      console.log("An error occurred while fetching all tags.");
      throw error;
    }
  };

  export const register = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            timeout:8000,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: username,
                    password: password
            })

        })
        const res = await response.json();
        return res

    } catch (error) {
        console.log("An error occurred while trying to register a new user.")
    }
}

export const login = async (username, password) => {

    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const res = await response.json();
        return res;
    }
    catch (error) {
        console.log("An error occurred while trying to login.")
        console.error()
    }
}