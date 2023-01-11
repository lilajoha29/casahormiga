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
        <img
          src={LogoAlone}
          alt="CasaHormiga"
          className=' h-20 m-5 mr-0'></img>
        <img
          src={NameAlone}
          alt="CasaHormiga"
          className=' h-10 mr-4' />
        <HiMenu
          className='z-40 m-7 text-3xl' 
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen === true ? (
          <div className='flex flex-col rounded-bl-full bg-logo h-96 absolute w-full  '>
            <div className='pt-36 font-Papyrus text-lg text-white'> 
              <Link to="/" className=''>
                <h1 className="m-7 ml-20">Alcancias</h1>
              {/* <HiMenu/> */}
              </Link>
              <Link to="b2">
                <h1 className="m-7 ml-32">Stickers Adhesivos</h1>
              </Link>
              <Link to="b3">
                <h1 className="m-7 ml-48">Personalizado</h1>
              </Link>
              <Link to="shop" >
                <HiShoppingCart className='m-7 ml-80 text-3xl' />
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