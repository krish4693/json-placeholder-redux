import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const Cart = () => {
  const cart = useSelector(state => state.album.cart);
  const isLoading = useSelector(state => state.album.isLoading);
  const error = useSelector(state => state.album.error);

  useEffect(() => {
    console.log("Cart items in Cart component:", cart); // Debugging
  }, [cart]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error loading cart data: {error}</h1>;
  }

  return (
    
    <div>
        <Navbar />
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(album => (
            <li key={album.id}>
              {album.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
