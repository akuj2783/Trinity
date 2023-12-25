// Navbar.js

import React, { useState } from 'react';
import '../stylesheets/navbar.css';
import LogoImage from '../assets/logo.png'; // Import the logo image

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <a href="/"><img src={LogoImage} alt="Trinity Logo" className="logo-img" /></a>
      </div>
      <div className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
        <li><a href="/services">Services</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/inquiry"><button className='inquiry-btn'>Inquiry</button></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
