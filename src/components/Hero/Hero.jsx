import React from 'react';
import './Hero.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import parlor from '../../assets/parlor.png';
import vector2 from '../../assets/vector2.jpg';
import vector4 from '../../assets/vector4.jpg';

export const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-side">
        <h1 className='ahoy'>AHOY SAILORS!</h1>
        <p>Ahoy and all aboard the Scoops-Troops! Sail on these all-new flavors of the month in a cone or a Troops Sundae.</p>
        <button className='btn1'>Order Now</button>
        <button className='btn2'>Read More</button>
        <div className="social">
          <FaFacebookF className='social-icon facebook' />
          <FaInstagram className='social-icon instagram' />
          <FaTwitter className='social-icon twitter' />
        </div>
      </div>
      <div className="right-side">
        <img src={parlor} alt='Ice Cream Parlor'/>
        <img className="vector vector2" src={vector2} alt='Vector 2'/>
        <img className="vector vector4" src={vector4} alt='Vector 4'/>
      </div>
    </div>
  );
};
