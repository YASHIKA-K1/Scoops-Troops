import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons
import './Footer.css';
import logo from '../../assets/ice-creame logo.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="left1">
        <img src={logo} alt='Logo' />
        <h5>LOCATION</h5>
        <p>NEAR VAISHALI NAGAR, JAIPUR</p>
        <h5>OPENING HOURS</h5>
        <p>MONDAY - FRIDAY</p>
        <p>11A.M. - 9P.M.</p>
        <p>SATURDAY-SUNDAY </p>
        <p>5P.M. - 11P.M.</p>
      </div>
      <div className="center">
        <h4>NAVIGATION</h4>
        <ul>
          <li>MENU</li>
          <li>EVENTS</li>
          <li>GALLERY</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div className="last-section">
        <h5>MENU</h5>
        <ul>
          <li>CONES</li>
          <li>SUNDAE</li>
          <li>MILKSHAKES</li>
          <li>DONUTS</li>
          <li>CUPCAKES</li>
          <li>CAKES</li>
          <li>SCOOPS</li>
          <li>SMOOTHIES</li>
        </ul>
      </div>
      <div className="follow-us">
        <h5>FOLLOW US</h5>
        <div className="social-icons">
          <FaFacebookF className='social-icon facebook' />
          <FaInstagram className='social-icon instagram' />
          <FaTwitter className='social-icon twitter' />
        </div>
        <p>Stay connected for more updates!</p>
      </div>
    </div>
  );
};

export default Footer;
