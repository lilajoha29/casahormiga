import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import buffetSticker from '../assets/brands2/buffetSticker.jpeg'
import SignSticker from '../assets/brands2/SignSticker.jpeg'
import memesStiker from '../assets/brands2/memesStiker.jpg'
import nameSticker from '../assets/brands2/nameSticker.jpg'
import gameStiker from '../assets/brands2/gameStiker.jpeg'

const Brands2 = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center justify-center p-10  font-Papyrus'>
        <h1 className='p-5 text-xl'>Crafter</h1>
        <h3 className='text-center '>Las impresiones en vinilo solucionan tu vida ya sea para lo que necesites puedes escoger la temática que necesites y serán diseñadas solo para ti y adornes lo que quieras y personaliza tu hogar.</h3>
      </div>
      <div className='grid grid-cols-2 px-3 py-5'>
        <Link to="/BuffetStickerB2" className='flex flex-col items-center justify-center py-3'>
          <img
            src={buffetSticker}
            alt="buffet Sticker"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Nombres Alacena</h2>
          <h2 className='font-Papyrus'>$ 15 - $ 30</h2>
        </Link>
        <Link to="/SignStickerB2" className='flex flex-col items-center justify-center py-3'>
          <img
            src={SignSticker}
            alt="Sign Sticker"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Símbolos</h2>
          <h2 className='font-Papyrus'>$ 15 - $ 30</h2>
        </Link>
        <Link to="/MemesStickerB2" className='flex flex-col items-center justify-center py-3'>
          <img
            src={memesStiker}
            alt="memes Stiker"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Memes</h2>
          <h2 className='font-Papyrus'>$ 15 - $ 30</h2>
        </Link>
        <Link to="/NameStickerB2" className='flex flex-col items-center justify-center py-3'>
          <img
            src={nameSticker}
            alt="name Sticker"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Nombres</h2>
          <h2 className='font-Papyrus'>$ 15 - $ 30</h2>
        </Link>
        <Link to="/GameStickerB2"
          className='flex flex-col items-center justify-center py-3 col-span-2'>
          <img
            src={gameStiker}
            alt="game Stiker"
            className=' h-28 w-28 m-5 mr-0 rounded-lg shadow-lg'></img>
          <h2 className='font-Papyrus'>Video juegos</h2>
          <h2 className='font-Papyrus'>$ 15 - $ 30</h2>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Brands2