import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from '../../components/Hero/Hero'
import { Yourday } from '../../components/Yourday/Yourday'
import { Part3 } from '../../components/part3/Part3'
import { Promocode } from '../../components/part4/Promocode'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Yourday/>
        <Part3/>
        <Promocode/>
        <Footer/>
    </>
  )
}
