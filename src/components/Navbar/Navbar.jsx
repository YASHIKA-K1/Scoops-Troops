import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/ice-creame logo.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt='' />
        <h2>Scoops-Troops</h2>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href='/menu'>MENU</a></li>
          <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            EVENTS
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><a href='/events/upcoming'>Upcoming Events</a></li>
                <li><a href='/events/past'>Past Events</a></li>
              </ul>
            )}
          </li>
          <li><a href='/gallery'>GALLERY</a></li>
          <li><a href='/about'>ABOUT</a></li>
          <li><a href='/contact'>CONTACT</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/login" className="login-button">Login</a>
        <a href="/signup" className="signup-button">Sign Up</a>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href='/menu'>MENU</a></li>
            <li><a href='/events'>EVENTS</a></li>
            <li><a href='/gallery'>GALLERY</a></li>
            <li><a href='/about'>ABOUT</a></li>
            <li><a href='/contact'>CONTACT</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};
