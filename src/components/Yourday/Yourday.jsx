import React from 'react';
import './Yourday.css';
import ice_cream from '../../assets/chocoicecreame.jpeg';
import cupcakes from '../../assets/cupcakes.jpeg';
import sundae from '../../assets/Ice-cream-sundae-hero-10.jpg';
import milkshakes from '../../assets/milkshakes-without-ice-cream1.jpg';
import sundae_1 from '../../assets/sundae.jpeg';

export const Yourday = () => {
  return (
    <div className='menu'>
      <h1>IT'S YOUR DAY, MAKE IT HAPPY</h1>
      <div className="cards">
        <div className="card">
          <div className="image-container">
            <img src={ice_cream} alt='Choco Ice Cream'/>
            <div className="overlay">
              <p>Choco Ice Cream</p>
            </div>
          </div>
          <button className='order-btn'>Order Now</button>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={cupcakes} alt='Cup Cakes'/>
            <div className="overlay">
              <p>Cup Cakes</p>
            </div>
          </div>
          <button className='order-btn'>Order Now</button>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={sundae} alt='Ice Cream Sundae'/>
            <div className="overlay">
              <p>Ice Cream Sundae</p>
            </div>
          </div>
          <button className='order-btn'>Order Now</button>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={milkshakes} alt='Milkshakes'/>
            <div className="overlay">
              <p>Milkshakes</p>
            </div>
          </div>
          <button className='order-btn'>Order Now</button>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={sundae_1} alt='Sundae'/>
            <div className="overlay">
              <p>Sundae</p>
            </div>
          </div>
          <button className='order-btn'>Order Now</button>
        </div>
      </div>
    </div>
  );
};
