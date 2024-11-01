import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../../assets/wj-logo.png'; // Import logo image
import './Navbar.css'; // Import custom CSS

const Navbar = () => {
  const navItems = [
    'Home',
    'Product',
    'Features',
    'About',
  ];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="WJ Delivery Logo" className="logo" />
        <h1 className="logo-text" style={{ fontFamily: 'Times New Roman', marginLeft: 5 }}>
          WJ Delivery
        </h1>
      </div>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className="marquee-box">
        <marquee behavior="scroll" direction="right">Welcome To WJ Delivery Website</marquee>
      </div>
    </nav>
  );
};

export default Navbar;