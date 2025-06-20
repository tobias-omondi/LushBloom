import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay } from 'swiper/modules';
import { motion } from "motion/react"

// Your image imports
import beauty1 from '/src/assets/makeup2.jpeg'; 
import beauty2 from '/src/assets/makeup.jpeg';
import beauty3 from '/src/assets/makeup1.jpeg';
import SectionTwo from './SectionTwo';




const LandingSales = ({ Title, Description }) => {
  return (
    <div>
    <div className='bg-white w-full p-4 md:p-10'>
      <div>
        <motion.h1
         initial={{ filter: "blur(8px)", opacity: 0 ,y:20 }}
         whileInView={{ filter: "blur(0px)", opacity: 1, y:0 }}
         transition={{ duration: 1 }}
        className='text-gray-950 text-2xl md:text-3xl py-2 md:py-5 font-medium'
        >The one beauty behind it all: </motion.h1>

        <p className='text-black py-3 font-light md:py-0  md:text-xl'>
          Sell online and in person.frozen in time.
          <span className='cursor-pointer hover:text-gray-700'>
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
        <SwiperSlide>
        <div className='w-full md:w-5/6 max-w-[500px] h-[300px] md:h-[400px] mx-auto '>
           <img src={beauty1} alt='makeup 1' className='w-full h-full rounded-lg object-cover shadow-lg'/>
         </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-4/5 md:w-3/4 max-w-[300px] h-[300px] md:h-[400px] mx-auto'>
            <img src={beauty2} alt='makeup 2' className='w-full h-full rounded-lg object-cover shadow-lg'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full md:w-5/6 max-w-[500px] h-[300px] md:h-[400px] mx-auto'>
           <img src={beauty3} alt='makeup 1' className='w-full h-full rounded-lg object-cover shadow-lg'/>
        </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
      <SectionTwo />
    </div>
   
  );
};

export default LandingSales;