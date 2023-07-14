
// import './App.css';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';

// function App() {
//   return (
//     <div className="container">
//       <Header/>
//       {/* <Footer/> */}
//       <Hero/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeItem = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== product.id
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  return (
    <div className="shopping-cart">
      <h3>Savatcha</h3>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>{item.price} so'm</span>
            <button onClick={() => removeItem(item)}>Olib tashlash</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <div className="cart-total">
          Jami: {calculateTotal()} so'm
        </div>
      )}
    </div>
  );
};

export default Cart;
