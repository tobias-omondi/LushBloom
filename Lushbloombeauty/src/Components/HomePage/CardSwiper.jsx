import React, { useRef, useEffect } from 'react';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay } from 'swiper/modules';
import { motion } from "motion/react"

// Your image imports
import beauty1 from '/src/assets/cardSwiper1.webp'; 
import beauty2 from '/src/assets/cardswiper2.webp';
import beauty3 from '/src/assets/cardSwiper3.webp';
import SectionTwo from './SectionTwo';


// use of aos animation plugins
import AOS from 'aos';
import 'aos/dist/aos.css';



const CardSwiper = ({ Title, Description }) => {

   useEffect (() => {
      AOS.init ({duration: 2500, once: true});
    },[])

  return (
    <div>
    <div className='bg-white w-full p-4 md:p-10'>
      <div>
        <motion.h1
         initial={{ filter: "blur(5px)", opacity: 0 ,y:20 }}
         whileInView={{ filter: "blur(0px)", opacity: 1, y:0 }}
         transition={{ duration: 1 }}
         className='text-gray-950 text-2xl md:text-3xl py-2 md:py-5 font-medium'
        >The one beauty behind it all: </motion.h1>

        <p className='text-black py-3 font-light md:py-0  md:text-xl'>
          Sell online and in person.frozen in time.
          <span className='cursor-pointer hover:text-gray-700' >
            sell locally and nationwide.
          </span>{" "}
          <br />{" "}
          <span className='cursor-pointer hover:text-gray-700'>
            Sell direct or wholesale.
          </span>
          <span className='cursor-pointer hover:text-gray-600'>
            {" "}
            Sell on mobile or desktop.
          </span>
        </p>

      </div>

      {/* Swiper with responsive breakpoints */}
      <Swiper  
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1} 
        loop={true}
        className='mySwipe w-full mt-7'
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          }
        }}
      >
        {/* Individual slides for each image to maintain your styling */}
        <SwiperSlide >
        <div className='w-full md:w-full max-w-[500px] h-[300px] md:h-[500px] mx-auto brightness-75'>
           <img src={beauty1} alt='makeup 1' className='w-full h-full rounded-lg object-cover shadow-lg'/>
         </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full md:w-full max-w-[500px] h-[300px] md:h-[500px] mx-auto brightness-75'>
            <img src={beauty2} alt='makeup 2' className='w-full h-full rounded-lg object-cover shadow-lg'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full md:w-full max-w-[500px] h-[300px] md:h-[500px] mx-auto brightness-75'>
           <img src={beauty3} alt='makeup 1' className='w-full h-full rounded-lg object-cover shadow-lg'/>
        </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
      <SectionTwo />
    </div>
   
  );
};

export default CardSwiper;