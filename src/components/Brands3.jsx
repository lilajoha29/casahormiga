import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Business from '../assets/brands3/Business.jpg'
import parties from '../assets/brands3/parties.jpeg'

const Brands3 = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center justify-center p-10  font-Papyrus'>
        <h1 className='p-5 text-xl'>Alcancías</h1>
        <h3 className='text-center '>Tienes una variedad de alcancías para escoger y ya sea escoger una temática para sea diseñado solo para ti y logres ahorrar tus sueños.</h3>
      </div>
      <div className='flex flex-col px-3 py-5'>
        <Link to="/FormBrands3" className='flex flex-col items-center justify-center py-3'>
          <img
            src={Business}
            alt="Business"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Empresarial o Pop</h2>
        </Link>
        <Link to="/FormBrands3" className='flex flex-col items-center justify-center py-3'>
          <img
            src={parties}
            alt="parties"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Fiestas o Reuniones</h2>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Brands3