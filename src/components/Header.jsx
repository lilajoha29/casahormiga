import React, { useState } from 'react'
import LogoAlone from '../assets/logos/LogoSinLetraCasaHormiga.png'
import NameAlone from '../assets/logos/LogoLetraNegraCasaHormiga.png'
import { HiMenu } from 'react-icons/hi'
import { HiShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div 
      className=" bg-gray flex flex-row items-center justify-between shadow-lg">
        <Link to="/" className='flex'>
          <img
            src={LogoAlone}
            alt="CasaHormiga"
            className=' h-20 m-5 mr-2 lg:h-24 lg:mr-5'></img>
          <img
            src={NameAlone}
            alt="CasaHormiga"
            className=' h-10 my-10 lg:h-14 ' />
        </Link>
        <HiMenu
          className='z-40 m-10 text-3xl' 
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen === true ? (
          <div
            className='flex flex-col z-30 rounded-bl-full bg-logo h-96 absolute w-full sm:w-96 sm:ml-64 md:w-[512px] md:h-[500px] lg:w-[768px] lg:h-[700px] xl:ml-[512px] 2xl:ml-[750px] '>
            <div className='pt-32 font-Papyrus text-lg text-white md:pt-52 lg:pt-80'> 
              <Link to="/Brands1" className=' max-w-fit'>
                <h1 className="m-7 ml-16 md:ml-28 lg:ml-36 md:text-xl lg:text-2xl lg:pb-3">Alcancias</h1>
              </Link>
              <Link to="/Brands2">
                <h1 className="m-7 ml-28 md:ml-44 lg:ml-52 md:py-2 lg:py-5 md:text-xl lg:text-2xl ">Crafter</h1>
              </Link>
              <Link to="/Brands3">
                <h1 className="m-7 ml-44 md:ml-56 lg:ml-80 md:text-xl lg:py-5 lg:text-2xl">Personalizado</h1>
              </Link>
              <Link to="/Shopping" >
                <HiShoppingCart className='m-7 ml-72 text-3xl md:ml-96 md:text-4xl lg:ml-[610px] lg:text-5xl' />
              </Link>
            </div>   
          </div>
          
        )
          : null

        }
      </div>
    </div>
  )
}

export default Header