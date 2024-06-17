import React from 'react'
import './Hero.css'
import facebook_icon from '../../assets/facebook.png'
import instagram_icon from '../../assets/instagram.png'
import twitter_icon from '../../assets/twitter.png'
import parlor from '../../assets/parlor.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-side">
        <h1>AHOY SAILORS!</h1>
        <p>Ahoy and all aboard the Scoops-Troops! Sail on these all-new flavors of the month in a cone or a Troops Sundae.</p>
        <button className='btn1'> Order Now</button>
        <button className='btn2'>Read More</button>
        <div className="social">
        <img className='facebook' src={facebook_icon} alt=''/>
        <img className='instagram' src={instagram_icon} alt=''/>
        <img className='twitter' src={twitter_icon} alt=''/>
        </div>
        </div>
        <div className="right-side">
            <img src={parlor} alt=''/>
        </div>


    </div>
  )
}
