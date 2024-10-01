import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'boxicons';
import bgm from './BGM_Video.mp4';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
      {/* Video Background */}
      <video autoPlay muted loop>
        <source src={bgm} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Social Media Icons on the Left Side */}
      <div className="social-media-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><box-icon type='logo' name='facebook'></box-icon></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><box-icon type='logo' name='twitter'></box-icon></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><box-icon name='instagram' type='logo' ></box-icon></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><box-icon type='logo' name='youtube'></box-icon></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><box-icon type='logo' name='linkedin'></box-icon></a>
        {/* <a href="https://tiktok.com" target="_blank" rel="noreferrer">TT</a> */}
      </div>

      {/* Select Icon for Menu (Right Side Center) */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </div>

      {/* Navigation Menu beside the Select Icon */}
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
    </div>
  );
}

export default Home;


