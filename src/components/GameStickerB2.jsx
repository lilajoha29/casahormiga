import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import gameStickerProduct1 from '../assets/brands2/gameStiker/gameSticker-product1.jpeg'
import gameStickerProduct2 from '../assets/brands2/gameStiker/gameSticker-product2.jpeg'
import gameStickerProduct3 from '../assets/brands2/gameStiker/gameSticker-product3.jpeg'
import gameStickerProduct4 from '../assets/brands2/gameStiker/gameSticker-product4.jpeg'
import gameStickerProduct5 from '../assets/brands2/gameStiker/gameSticker-product5.jpeg'
import gameStickerProduct6 from '../assets/brands2/gameStiker/gameSticker-product6.jpeg'
import gameStickerProduct7 from '../assets/brands2/gameStiker/gameSticker-product7.jpeg'
import gameStickerProduct8 from '../assets/brands2/gameStiker/gameSticker-product8.jpeg'
import gameStickerProduct9 from '../assets/brands2/gameStiker/gameSticker-product9.jpeg'
import gameStickerProduct10 from '../assets/brands2/gameStiker/gameSticker-product10.jpeg'


const GameStickerB2 = () => {

  const slides = [
    gameStickerProduct1,
    gameStickerProduct2,
    gameStickerProduct3,
    gameStickerProduct4,
    gameStickerProduct5,
    gameStickerProduct6,
    gameStickerProduct7,
    gameStickerProduct8,
    gameStickerProduct9,
    gameStickerProduct10,
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
            className=' rounded-2xl bg-center bg-cover duration-500'>
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
        <div className="flex flex-col p-5  font-Papyrus md:py-16">
          <h1 className='font-Papyrus py-5 text-2xl'>
            Video juegos</h1>
          <h2 className='font-Papyrus text-2xl'>$ 30 - $ 50</h2>
          <h2 className='font-Papyrus py-5'>
            personaliza tu Wii, consola, incluye controles y guitarra.</h2>
          <h2 className='font-Papyrus'>
            Medidas: pliego</h2>
          <h2 className='font-Papyrus'>
            Material: vinilo imprimible adhesivo</h2>
          <div className='flex flex-col  font-Papyrus '>
            <h2 className='font-Papyrus py-5'>
              Diseño único de acuerdo a tu gusto o necesidad asi que escoge la temática
            </h2>
            {/* en este espacio va el input */}
            <button className=' m-5 p-3 w-fit shadow-inner rounded-lg border border-button focus:text-white focus:bg-logo'>Añadir a el Carrito</button>
          </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default GameStickerB2