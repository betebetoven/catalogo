// src/components/Carrito.js
import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import firestore from '../firebase';
import ProductCard from './ProductCardCarrito';

function Carrito() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(storedCartItems);
    Promise.all(storedCartItems.map(cartItem => 
      getDoc(doc(firestore, 'mens', cartItem.productId)).then(docSnapshot => 
        docSnapshot.exists() ? { id: docSnapshot.id, size2: cartItem.size, color2: cartItem.color, ...docSnapshot.data() } : null
      )
    )).then(items => setCartItems(items.filter(item => item !== null)));
}, []);
useEffect(() => {
    setTotal(cartItems.reduce((acc, item) => acc + parseInt(item.precio), 0));
    }, [cartItems]);

const removeFromCart = (itemId, size, color) => {
    let storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    storedCartItems = storedCartItems.filter(item => !(item.productId === itemId && item.size === size && item.color === color));
    localStorage.setItem('cart', JSON.stringify(storedCartItems));
    setCartItems(storedCartItems);
};

  return (
    <div className="carrito-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <ProductCard product={item} size={item.size2} color={item.color2} />
              <button onClick={() => removeFromCart(item.id, item.size2, item.color2)} className="remove-item-btn">Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
        <h3>Total: ${total}</h3>
    </div>
  );
}

export default Carrito;
