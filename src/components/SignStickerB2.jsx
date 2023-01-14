import React from 'react'
import Header from './Header'
import Footer from './Footer'

const SignStickerB2 = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center p-10  font-Papyrus">
        <h1 className='font-Papyrus py-5'>
          Símbolos</h1>
        <h2 className='font-Papyrus'>$ 5 - $ 10</h2>
        <h2 className='font-Papyrus py-5'>
          te gusta user stikers para tus cuadernos o lo que desees, incluye una hoja con stikers de diferentes tamaños.</h2>
        <h2 className='font-Papyrus'>
          Medidas: una hoja tamaño carta de stikers hasta 5cm diametro. </h2>
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

export default SignStickerB2
