import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation
import './SidebarMenu.css';

function SidebarMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();  // Hook to detect route changes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the route changes
  useEffect(() => {
    // Close the menu when navigating to a new page
    setIsMenuOpen(false);
  }, [location]);  // Runs when location (current route) changes

  return (
    <>
      {/* Select Icon (Hamburger menu) */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </div>

      {/* Navigation Menu */}
      <div className={`navigation-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><box-icon type='logo' name='facebook'></box-icon></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><box-icon type='logo' name='twitter'></box-icon></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><box-icon name='instagram' type='logo' ></box-icon></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><box-icon type='logo' name='youtube'></box-icon></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><box-icon type='logo' name='linkedin'></box-icon></a>
      </div>
    </>
  );
}

export default SidebarMenu;
