import React from 'react'
import './Part3.css'
import icecream from '../../assets/icecone.webp'

export const Part3 = () => {
  return (
    <div className='part3'>
      <div className="left">
        <div className="oval-background">
        <h1>ENJOY YOUR EVERY BITE.</h1>
        <h4>Ice-Cream tastes better when you eat with your friends and family.</h4>
        <button>Order Now</button>
    </div>
    </div>
        
        <div className="right">
            <img src={icecream} alt=''/>
        </div>
    </div>
  )
}
