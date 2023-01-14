import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MoneyboxN1B1 = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center p-10  font-Papyrus">
        <h1 className='font-Papyrus py-5'>
          Alcancía Sencilla Nivel 1</h1>
        <h2 className='font-Papyrus'>$ 30</h2>
        <h2 className='font-Papyrus'>
          100% reutilizable e ideal para regalar y decorar espacios propios</h2>
        <h2 className='font-Papyrus'>
          Medidas: ancho 10cm, alto 10cm, largo 10cm</h2>
        <h2 className='font-Papyrus'>
          Material: MDF de 3mm de espesor</h2>
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

export default MoneyboxN1B1
