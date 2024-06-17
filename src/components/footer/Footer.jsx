import React from 'react'
import './Footer.css'
import logo from '../../assets/ice-creame logo.png'
import facebook_icon from '../../assets/facebook.png'
import instagram_icon from '../../assets/instagram.png'
import twitter_icon from '../../assets/twitter.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="left1">
            <img src={logo} alt=''/>
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
                <li>MILKSHAEKS</li>
                <li>DONUTS</li>
                <li>CUPCAKES</li>
                <li>CAKES</li>
                <li>SCOOPS</li>
                <li>SMOOTHIES</li>

            </ul>
        </div>
        <div className="follow-us">
            <h5>FOLLOW US</h5>
        <img className='facebook' src={facebook_icon} alt=''/>
        <img className='instagram' src={instagram_icon} alt=''/>
        <img className='twitter' src={twitter_icon} alt=''/>
        </div>

    </div>
  )
}
