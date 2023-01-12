import React, { useState }  from 'react'
import Header from './Header'
import Footer from './Footer'
import Pig from '../assets/brands1/moneyboxPig.jpeg'
import Level1 from '../assets/brands1/moneyboxLevel1.jpeg'
import Level2 from '../assets/brands1/moneyboxLevel2.jpeg'
import { Link } from 'react-router-dom'


const Brands1 = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center justify-center p-10  font-Papyrus'>
        <h1 className='p-5 text-xl'>Alcancías</h1>
        <h3 className='text-center '>Tienes una variedad de alcancías para escoger y ya sea escoger una temática para sea diseñado solo para ti y logres ahorrar tus sueños.</h3>
      </div>
      <div className='flex flex-col px-3 py-5'>
        <Link to="/MoneyboxPigB1" className='flex flex-col items-center justify-center py-3'>
          <img
            src={Pig}
            alt="Moneybox Pig"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Alcancía Marrano</h2>
          <h2 className='font-Papyrus'>$ 30</h2>
        </Link>
        <Link to="/MoneyboxN1B1" className='flex flex-col items-center justify-center py-3'>
          <img
            src={Level1}
            alt="Moneybox Level1"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Alcancía Sencilla Nivel 1</h2>
          <h2 className='font-Papyrus'>$ 30</h2>
        </Link>
        <Link to="/MoneyboxN2B1" className='flex flex-col items-center justify-center py-3'>
          <img
            src={Level2}
            alt="Moneybox Level2"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Alcancía Doble Nivel 2</h2>
          <h2 className='font-Papyrus'>$ 30</h2>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Brands1