import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay } from 'swiper/modules';

// Your image imports
import beauty1 from '/src/assets/makeup2.jpeg'; 
import beauty2 from '/src/assets/makeup.jpeg';
import beauty3 from '/src/assets/makeup1.jpeg';

gsap.registerPlugin(TextPlugin, SlowMo);

const LandingSales = ({ Title, Description }) => {
  const headlineRef = useRef(null);

  useEffect(() => {
    gsap.to(headlineRef.current, {
      duration: 4,
      text: "The one beauty behind it all:",
      ease: SlowMo.ease.config(0.2, 0.2, false),
      opacity: 0.8,
      scale: 1,
      color: "white",
    });
  }, []);

  return (
    <div className='bg-orange-500 w-full p-4 md:p-10'>
      <div>
        <h1
          ref={headlineRef}
          className='text-yellow-300 text-3xl md:text-5xl py-2 md:py-5 font-bold'
        ></h1>
        <h3 className='text-gray-900 py-4 md:py-3 text-xl md:text-4xl'>
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
        </h3>
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
        className='mySwipe w-fullr'
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
        <div className='w-full md:w-5/6 max-w-[500px] h-[300px] md:h-[400px] mx-auto'>
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
  );
};

export default LandingSales;