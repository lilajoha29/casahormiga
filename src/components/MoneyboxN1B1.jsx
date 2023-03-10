import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MoneyboxL1Product from '../assets/brands1/moneyboxLevel1.jpeg'
import Moneybox from '../assets/brands1/moneybox-products.jpeg'
import moneyboxLevel1p1 from '../assets/brands1/moneyboxLevel1/moneyboxLevel1-product1.jpeg'
import MoneyboxLevel1p2 from '../assets/brands1/moneyboxLevel1/moneyboxLevel1-product2.jpeg'
import MoneyboxLevel1p3 from '../assets/brands1/moneyboxLevel1/moneyboxLevel1-product3.jpeg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const MoneyboxN1B1 = () => {
  const slides = [
    MoneyboxL1Product,
    moneyboxLevel1p1,
    MoneyboxLevel1p2,
    MoneyboxLevel1p3,
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
      <div className='md:flex'>
        {/* carrusel */}
        <div className='w-full m-auto pt-16 px-4 relative md:py-16 md:px-2 '>
          <div
            className=' rounded-2xl bg-center bg-cover duration-500'
          >
            <img classname='w-44 h-44' src={slides[currentIndex]}></img>
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
        
        <div className="flex flex-col p-5 font-Papyrus md:py-16">
          <h1 className='font-Papyrus py-5 text-2xl'>
            Alcanc??a Sencilla Nivel 1</h1>
          <h2 className='font-Papyrus text-2xl'>$ 30</h2>
          <h2 className='font-Papyrus py-5'>
            100% reutilizable e ideal para regalar y decorar espacios propios</h2>
          <h2 className='font-Papyrus'>
            Medidas: ancho 10cm, alto 10cm, largo 10cm</h2>
          <h2 className='font-Papyrus'>
            Material: MDF de 3mm de espesor</h2>
          <div className='flex flex-col  font-Papyrus '>
            <h2 className='font-Papyrus py-5'>
              Dise??o ??nico de acuerdo a tu gusto o necesidad asi que escoge la tem??tica
            </h2>
            {/* en este espacio va el input */}
            <button className='m-5 p-3 w-fit shadow-inner rounded-lg border border-button focus:text-white focus:bg-logo'>A??adir a el Carrito</button>
          </div>
        </div>
        
        
      </div>
      <Footer />
    </div>
  )
}

export default MoneyboxN1B1
