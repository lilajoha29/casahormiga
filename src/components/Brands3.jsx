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
        <h1 className='p-5 text-xl md:text-2xl'>Personalizado</h1>
        <h3 className='text-center py-5 md:text-lg'>En tu empresa puedes solucionar todo el branding que necesites y crezcan tus clientes, desarrollando impresiones en vinilo que puedes usar de la forma que mas te convenga y con el diseño ya sea de tu logo o de lo que desees y es la mejor solución para las fiestas de cumpleaños</h3>
        <h3 className='text-center md:text-lg'>estos son productos que se diseñan 100% de forma personalizada, asi que es necesario que expreses tus ideas y realicemos una cotización con la necesidad exacta que tienes.</h3>
      </div>
      <div className='flex flex-col px-3 py-5 sm:flex-row sm:justify-around sm:pb-14'>
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