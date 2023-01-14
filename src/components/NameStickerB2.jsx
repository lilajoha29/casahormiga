import React from 'react'
import Header from './Header'
import Footer from './Footer'

const NameStickerB2 = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center p-10  font-Papyrus">
        <h1 className='font-Papyrus py-5'>
          Nombres</h1>
        <h2 className='font-Papyrus'>$ 5 - $ 10</h2>
        <h2 className='font-Papyrus py-5'>
          listos para marcar con tu nombre tus botecitos, cuadernos o lo que desees, incluye 3 nombres de 3 tamaños distintos.</h2>
        <h2 className='font-Papyrus'>
          Medidas: ancho 10cm, alto 5cm - 14cm, 9cm - 18cm, 13cm </h2>
        <h2 className='font-Papyrus'>
          ancho 14cm, alto 9cm  </h2>
        <h2 className='font-Papyrus'>
          ancho 18cm, alto 13cm </h2>
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

export default NameStickerB2
