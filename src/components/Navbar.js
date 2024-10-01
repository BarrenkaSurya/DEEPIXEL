import React from 'react';
import './Navbar.css';
import logo from './logo.jpeg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <Link to="/"><img src={logo} alt="Company Logo" className="logo" /></Link>
        <Link to="/"><span className="company-name">DEEPIXEL</span></Link>
      </div>
    </nav>
  );
}

export default Navbar;


