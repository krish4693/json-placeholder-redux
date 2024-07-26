// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Logo
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
