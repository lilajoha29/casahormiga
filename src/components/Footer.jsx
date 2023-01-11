import React from 'react'
import Banner from '../assets/logos/Banner.png'
import LogoW from '../assets/logos/LogoBLANCO.png'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillTwitterCircle} from 'react-icons/ai'



const Footer = () => {
  return (
    <div className=''>
      <img src={Banner} className='absolute w-96 h-28'></img>
      <div className='flex flex-row   '>
          <img src={LogoW} className=' h-24 z-40 m-2 pl-8 '></img>
        <div className='flex flex-col justify-center px-10 ml-5'>
          <a href=''
            className='z-40 flex flex-row text-white py-1'>
            <AiFillInstagram className='text-xl '/>
            <h2 className='font-Papyrus px-2' >casa_hormiga</h2>
          </a>
          <a href=''
            className='z-40 flex flex-row text-white py-1'>
            <IoLogoWhatsapp className='text-xl' />
            <h2 className='font-Papyrus px-2' >315 6819046</h2>
          </a>
          <a href=''
            className='z-40 flex flex-row text-white py-1'>
            <AiFillTwitterCircle className='text-xl' />
            <h2 className='font-Papyrus px-2 ' >casa_hormiga</h2>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer