import React from 'react'
import './Yourday.css'
import ice_cream from '../../assets/chocoicecreame.jpeg'
import cupcakes from '../../assets/cupcakes.jpeg'
import sundae from '../../assets/Ice-cream-sundae-hero-10.jpg'
import milkshakes from '../../assets/milkshakes-without-ice-cream1.jpg'
import sundae_1 from '../../assets/sundae.jpeg'

export const Yourday = () => {
  return (
    <div className='menu'>
        <h1>IT'S YOUR DAY, MAKE IT HAPPY</h1>
        <div className="cards">
            <div className="card1">
            <img src={ice_cream} alt=''/>
            <p>Choco-ice-creame</p>
            </div>
            <div className="card2">
            <img src={cupcakes} alt=''/>
            <p>Cup-Cakes</p>
            </div>
            <div className="card3">
            <img src={sundae} alt=''/>
            <p>Ice-Creame-Sundae</p>
            </div>
            <div className="card4">
            <img src={milkshakes} alt=''/>
            <p>Milkshakes</p>
            </div>
            <div className="card5">
            <img src={sundae_1} alt=''/>
            <p>Sundae</p>
            </div>

        </div>
    </div>

  )
}
