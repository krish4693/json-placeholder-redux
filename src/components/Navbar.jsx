import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  // Access the cart state from the Redux store
  const cart = useSelector(state => state.album.cart);
  const cartCount = cart.length;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Logo
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <div className="cart-container">
          <Link to="/cart">Cart</Link>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
