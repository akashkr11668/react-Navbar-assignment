import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h1 class="logo">Navbar</h1>
      </Link>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
      </ul>
      <form className="search-form">
        <input type="text" placeholder="Search" className="search-input" />
        <button type="submit" className="search-btn">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
