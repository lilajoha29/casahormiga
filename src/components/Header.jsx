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
            className=' h-20 m-5 mr-2'></img>
          <img
            src={NameAlone}
            alt="CasaHormiga"
            className=' h-10 my-10 ' />
        </Link>
        <HiMenu
          className='z-40 m-10 text-3xl' 
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen === true ? (
          <div className='flex flex-col z-30 rounded-bl-full bg-logo h-96 absolute w-full  '>
            <div className='pt-32 font-Papyrus text-lg text-white'> 
              <Link to="/Brands1" className=' max-w-fit'>
                <h1 className="m-7 ml-16 ">Alcancias</h1>
              </Link>
              <Link to="/Brands2">
                <h1 className="m-7 ml-28  ">Crafter</h1>
              </Link>
              <Link to="/Brands3">
                <h1 className="m-7 ml-44 ">Personalizado</h1>
              </Link>
              <Link to="/Shopping" >
                <HiShoppingCart className='m-7 ml-72 text-3xl ' />
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