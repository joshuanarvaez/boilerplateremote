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
// import React from 'react';
// import Header from './Header';
// import Main from './Main';
// import Basket from './Basket';
// import postsRouter from '.../api/posts';
// import { useState } from 'react';
// function App() {
//   const { posts } = postsRouter;
//   const [cartItems, setCartItems] = useState([]);
//   const onAdd = (post) => {
//         //search for the product with the product ID, check if it exists
//     const exist = cartItems.find((x) => x.id === post.id);
//     if (exist) {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === post.id ? { ...exist, qty: exist.qty + 1 } : x
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...post, qty: 1 }]);
//     }
//   };


//   const onRemove = (post) => {
//     //search for the product with the product ID, check if it exists
//     const exist = cartItems.find((x) => x.id === post.id);
//     if (exist.qty === 1) {
//       setCartItems(cartItems.filter((x) => x.id !== post.id));
//     } else {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === post.id ? { ...exist, qty: exist.qty - 1 } : x
//         )
//       );
//     }
//   };


//   return (
//     <div className="App">
//       <Header countCartItems={cartItems.length}></Header>
//       <div className="row">
//         <Main posts={posts} onAdd={onAdd}></Main>
//         <Basket
//           cartItems={cartItems}
//           onAdd={onAdd}
//           onRemove={onRemove}
//         ></Basket>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Navbar, Nav, Container, Anchor} from 'react-bootstrap'

import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Login } from './Login'
import { Footer } from './Footer';



function App() {
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
        </Routes>
      </div>

      </div>
      <Footer />

      </BrowserRouter>
  );
}

export default App;
