import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MoneyboxPigProduct from '../assets/brands1/moneyboxPig/moneyboxPig-product.jpeg'
import Moneybox from '../assets/brands1/moneybox-products.jpeg'
import MoneyboxPig from '../assets/brands1/moneyboxPig.jpeg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const MoneyboxPigB1 = ({ data, addToCart }) => {
    // let{id, name, price, input} = data


  const slides = [
    MoneyboxPig,
    MoneyboxPigProduct,
    Moneybox,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <Header />
      <div className=''>
        {/* carrusel */}
        <div className='w-full m-auto pt-16 px-4 relative '>
          <div
            className=' rounded-2xl bg-center bg-cover duration-500'
          >
            <img  classname='w-44 h-44' src={slides[currentIndex]}></img>
          </div>
          
          <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          
          <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>        
        <div className="flex flex-col p-5 font-Papyrus ">
          <h1 className='font-Papyrus py-5 text-2xl'>
            Alcancía Marrano</h1>
          <h2 className='font-Papyrus text-2xl'>$ 30</h2>
          <h2 className='font-Papyrus py-5'>
            100% reutilizable e ideal para regalar y decorar espacios propios</h2>
          <h2 className='font-Papyrus'>
            Medidas: ancho 17cm, alto 17cm, largo 18cm</h2>
          <h2 className='font-Papyrus'>
            Material: MDF de 3mm de espesor</h2>
        </div>
          <button 
          className=' m-5 p-3 w-fit shadow-inner rounded-lg border border-button focus:text-white focus:bg-logo'
          // onClick={() => addToCart(id)}
          >Añadir a el Carrito</button>
      </div>
      <Footer />
    </div>
  )
}

export default MoneyboxPigB1
