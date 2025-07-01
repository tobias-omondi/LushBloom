import React from 'react';
import sliderone from "/src/assets/vendersliderimages/Cleansing 🧼🧖🏾_♀️.jpeg";
import slidertwo from "/src/assets/makeup.jpeg";
import sliderthree from "/src/assets/vendersliderimages/24 Moisturizing Products For Every Inch Of Your Body.jpeg";
import sliderfour from "/src/assets/vendersliderimages/nails.jpeg";
import sliderfive from "/src/assets/vendersliderimages/beautyshop.jpeg";

import { FaStar, FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const showOneSlides = [
  { id: 1, image: sliderone },
  { id: 2, image: slidertwo },
  { id: 3, image: sliderthree },
  { id: 4, image: sliderfour },
  { id: 5, image: sliderfive },
];

const VenderSectionFour = () => {
  return (
    <div className="p-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 6000, // 3 seconds between slides
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {showOneSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="object-cover rounded-lg shadow-md"
                style={{ width: "350px", height: "350px" }}
              />
              <div className="flex flex-row gap-20 mt-4">

                <div className='flex flex-row'>
                <FaStar size={20} className="text-orange-500" />
                <FaStar size={20} className="text-orange-500" />
                <FaStar size={20} className="text-orange-500" />
                <FaStar size={20} className="text-orange-500" />
                <FaStar size={20} />
                </div>
             
              <div>
              <FaHeart size={20} className="text-red-600" />
              </div>

              </div>
            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VenderSectionFour;
