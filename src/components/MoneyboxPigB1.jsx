import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MoneyboxPigProduct from '../assets/brands1/moneyboxPig/moneyboxPig-product.jpeg'
import Moneybox from '../assets/brands1/moneybox-products.jpeg'
import MoneyboxPig from '../assets/brands1/moneyboxPig.jpeg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const MoneyboxPigB1 = () => {

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
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative '>
          <div
            // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
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
        <div className="flex flex-col items-center justify-center p-10  font-Papyrus">
          <h1 className='font-Papyrus py-5'>
            Alcancía Marrano</h1>
          <h2 className='font-Papyrus'>$ 30</h2>
          <h2 className='font-Papyrus py-5'>
            100% reutilizable e ideal para regalar y decorar espacios propios</h2>
          <h2 className='font-Papyrus'>
            Medidas: ancho 17cm, alto 17cm, largo 18cm</h2>
          <h2 className='font-Papyrus'>
            Material: MDF de 3mm de espesor</h2>
        </div>
        <div className=''>
          <h2 className='font-Papyrus'>
            Diseño único de acuerdo a tu gusto o necesidad asi que escoge la temática
          </h2>
        </div>
        <button className='m-auto p-3 w-fit shadow-inner rounded-lg border border-button focus:text-white focus:bg-logo'>Añadir a el Carrito</button>
      </div>
      <Footer />
    </div>
  )
}

export default MoneyboxPigB1
