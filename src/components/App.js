// import React, { useState, useEffect } from 'react';
// // getAPIHealth is defined in our axios-services directory index.js
// // you can think of that directory as a collection of api adapters
// // where each adapter fetches specific info from our express server's /api route
// import { getAPIHealth } from '../axios-services';
// import '../style/App.css';

// const App = () => {
//   const [APIHealth, setAPIHealth] = useState('');

//   useEffect(() => {
//     // follow this pattern inside your useEffect calls:
//     // first, create an async function that will wrap your axios service adapter
//     // invoke the adapter, await the response, and set the data
//     const getAPIStatus = async () => {
//       const { healthy } = await getAPIHealth();
//       setAPIHealth(healthy ? 'api is up! :D' : 'api is down :/');
//     };

//     // second, after you've defined your getter above
//     // invoke it immediately after its declaration, inside the useEffect callback
//     getAPIStatus();
//   }, []);

//   return (
//     <div className="app-container">
//       <h1>Hello, World!</h1>
//       <p>API Status: {APIHealth}</p>
//     </div>
//   );
// };

// export default App;




import React, {useState, useEffect} from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

import {Navbar, Nav, Container, Anchor} from 'react-bootstrap'


import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Login } from './Login'
// import { Footer } from './Footer';
import { Cart } from './Cart';
import { Products } from './Products';

import { fetchAllPosts, fetchAllTags } from "../api/index";




function App() {
  let savedUsername = localStorage.getItem('username')
  let savedToken = localStorage.getItem('token')
  let savedUser = {};
  if(savedUsername && savedToken) {
    savedUser = {
      username: savedUsername,
      token: savedToken
    }
  }
  const [user, setUser] = useState(savedUser ? savedUser : {});
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);

  const handleLogout = () => {
    setUser({});
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  };

  useEffect(() => {
    Promise.all( 
      [
        fetchAllPosts()
      ]
    )
    .then(([postsFromAPI]) => {
      setPosts(postsFromAPI);
      
    })
  }, [])

  useEffect(() => {
    Promise.all( 
      [
        fetchAllTags()
      ]
    )
    .then(([tagsFromAPI]) => {
      setTags(tagsFromAPI);
    })
  }, [])
  return (
    <BrowserRouter>
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/home">Grace Shopper</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>

            </Nav>
          </Container>
        </Navbar>
      </> 
      <div>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/products" element={<Products/>}/>


        </Routes>
      </div>

      </div>

      </BrowserRouter>
  );
}

export default App;
