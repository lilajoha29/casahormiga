import React from 'react'
import Header from './Header'
import Footer from './Footer'

const GameStickerB2 = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center p-10  font-Papyrus">
        <h1 className='font-Papyrus py-5'>
          Video juegos</h1>
        <h2 className='font-Papyrus'>$ 30 - $ 50</h2>
        <h2 className='font-Papyrus py-5'>
          personaliza tu Wii, consola, incluye controles y guitarra.</h2>
        <h2 className='font-Papyrus'>
          Medidas: pliego</h2>
        <h2 className='font-Papyrus'>
          Material: vinilo imprimible adhesivo</h2>
        <h2 className='font-Papyrus'>
          Diseño único de acuerdo a tu gusto o necesidad asi que escoge la temática
        </h2>
      </div>
      <div className=''>

      </div>

      <button className='m-auto p-3 w-fit shadow-inner rounded-lg border border-button focus:text-white focus:bg-logo'>Añadir a el Carrito</button>
      <Footer />
    </div>
  )
}

export default GameStickerB2