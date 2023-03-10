import React from 'react'
import Header from './Header'
import Moneybox from '../assets/brands1/moneyboxPig.jpeg'
import Stiker from '../assets/brands2/SignSticker.jpeg'
import Person from '../assets/brands3/Business.jpg'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='flex flex-col items-center justify-center p-10  font-Papyrus'>
        <h1 className='p-5 text-xl md:text-2xl'>¿Tienes una idea?</h1>
        <h3 className='text-center md:text-lg'>Diseñamos todo tipo de ilustraciones en impresiones de vinilo ya sea para decorar tu cuarto como desees y también para el desarrollo de tu empresa. </h3>
      </div>
      <div className='flex flex-col px-3 py-10 lg:px-60 '>
        <Link to="/Brands1" className='flex flex-row justify-around lg:justify-center'>
          <h1 className='py-12 text-xl md:text-2xl font-Papyrus lg:mx-14'>Alcancías</h1>
          <img
            src={Moneybox}
            alt="CasaHormiga"
            className=' h-28 w-28 m-5 mr-0 rounded-full shadow-lg lg:mx-14'></img>
          {/* <img
            src={Stiker}
            alt="CasaHormiga"
            className=' absolute hover:-translate-y-full h-28 w-28 m-5 mr-0 rounded-full shadow-lg'></img> */}
        </Link>
        <Link to="/Brands2" className='flex flex-row justify-around lg:justify-center'>
          <img
            src={Stiker}
            alt="CasaHormiga"
            className=' h-28 w-28 m-5 mr-0 rounded-full shadow-lg lg:mx-14'></img>
          <h1 className='py-12 text-xl md:text-2xl font-Papyrus lg:mx-14'>Crafter</h1>
        </Link>
        <Link to="/Brands3" className='flex flex-row justify-around lg:justify-center'>
          <h1 className='py-12 text-xl md:text-2xl font-Papyrus lg:mx-14'>Personalizado </h1>
          <img
            src={Person}
            alt="CasaHormiga"
            className=' h-28 w-28 m-5 mr-0 rounded-full shadow-lg lg:mx-14'></img>
        </Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Home