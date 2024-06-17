import React from 'react'
import './Navbar.css'
import logo from '../../assets/ice-creame logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
        <img src={logo} alt=''/>
        <h2>Scoops-Troops</h2>
        </div>
        
        <div className="navbar-links">
        <ul>
            <li>MENU</li>
            <li>EVENTS</li>
            <li>GALLERY</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        </div>
    </div>
  )
}
