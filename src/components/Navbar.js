import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../components/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src={logo} /> */}
        <h1>DEEPIXEL STUDIO</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
