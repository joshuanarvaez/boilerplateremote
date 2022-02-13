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






























import React, { PureComponent } from "react";
import {
  CartComponent,
  ProductComponent,
  CheckoutButtonComponent,
  cartLocalization,
  cartActions,
  cartActionTypes
} from "react-shopping-cart";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";

const { getDefaultLocalization } = cartLocalization;

// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const iPadCaseLocalization = {
  color: "Color",
  iPadCase: "iPad case",
  red: "Red",
  green: "Green",
  yellow: "Yellow",
  GBP: "£",
  EUR: "€",
  USD: "$"
};

const iPadPropertiesWithAdditionalCostLocalization = {
  Pineapple: "Pineapple (+{cost, number, CUR})"
};

export class Cart extends PureComponent {
  state = {
    products: {},
    product: {
      name: "Fruit",
      id: "Fruit",
      path: "/shop/ipad-case/",
      properties: {
        Fruit: [
          "Bananas",
          "Apples",
          "Kiwis",
          "Grapes",
          "Strawberries",
          "Pomegranates",
          "Oranges",
          "Watermelon",
          "Dragon Fruit",
          {
            additionalCost: {
              GBP: 1,
              EUR: 2,
              USD: 5
            },
            value: "Pineapple"
          }
        ]
      },
      propertiesToShowInCart: ["color"],
      prices: { GBP: 70, EUR: 80, USD: 50 },
      currency: "USD",
      imageSrc: "1-483x321.jpeg"
    },
    getProductLocalization: getDefaultLocalization("product", "en", {
      ...iPadCaseLocalization,
      ...iPadPropertiesWithAdditionalCostLocalization
    }),
    getCheckoutButtonLocalization: getDefaultLocalization(
      "checkoutButton",
      "en",
      iPadCaseLocalization
    ),
    getCartLocalization: getDefaultLocalization(
      "cart",
      "en",
      iPadCaseLocalization
    )
  };

  addProduct = (key, product, currency) =>
    void this.setState(
      ({
        products: { [key]: cartProduct = { quantity: 0 }, ...restOfProducts }
      }) => ({
        products: {
          ...restOfProducts,
          [key]: {
            ...product,
            quantity: product.quantity + cartProduct.quantity
          }
        }
      })
    );

  generateProductKey = (id, properties) =>
    `${id}/${Object.entries(properties).join("_")}`;

  updateProduct = (key, updatedProduct) => void console.log(":)");

  removeProduct = key => void console.log(":C");

  render() {
    const {
      addProduct,
      generateProductKey,
      updateProduct,
      removeProduct,
      state
    } = this;

    const {
      getProductLocalization,
      getCheckoutButtonLocalization,
      getCartLocalization,
      products,
      product
    } = state;

    const checkoutButtonElement = (
      <CheckoutButtonComponent
        grandTotal={500}
        hidden={false}
        checkoutURL="./Checkout"
        currency="USD"
        getLocalization={getCheckoutButtonLocalization}
      />
    );
    return (
      <div className="container">
        <ProductComponent
          {...product}
          onAddProduct={
            addProduct
            // Help product to get into the cart
          }
          generateProductKey={
            generateProductKey
            // create product key as you wish
          }
          getLocalization={getProductLocalization}
        />

        <CartComponent
          products={
            products
            // Provide your own product's Object(Look at Products)
          }
          onUpdateProduct={
            updateProduct
            // Update something
          }
          getLocalization={getCartLocalization}
          currency="USD"
          onRemoveProduct={
            removeProduct
            // Remove something
          }
          checkoutButton={checkoutButtonElement}
          isCartEmpty={false}
          getLocalization={getCartLocalization}
        />
      </div>
    );
  }
}

export default Cart;









// import React from "react";
// import ReactDOM from "react-dom";
// import { CartProvider, useCart } from "react-use-cart";

// function Page() {
//   const { addItem } = useCart();

//   const products = [
//     {
//       id: 1,
//       name: "Malm",
//       price: 9900,
//       quantity: 1
//     },
//     {
//       id: 2,
//       name: "Nordli",
//       price: 16500,
//       quantity: 5
//     },
//     {
//       id: 3,
//       name: "Kullen",
//       price: 4500,
//       quantity: 1
//     },
//   ];

//   return (
//     <div>
//       {products.map((p) => (
//         <div key={p.id}>
//           <button onClick={() => addItem(p)}>Add to cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export const Cart = () => {
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     updateItemQuantity,
//     removeItem,
//   } = useCart();

//   if (isEmpty) return <p>Your cart is empty</p>;

//   return (
//     <>
//       <h1>Cart ({totalUniqueItems})</h1>

//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.quantity} x {item.name} &mdash;
//             <button
//               onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//             >
//               -
//             </button>
//             <button
//               onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//             >
//               +
//             </button>
//             <button onClick={() => removeItem(item.id)}>&times;</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// function App() {
//   return (
//     <CartProvider>
//       <Page />

//       <Cart />
//     </CartProvider>
//   );
// }