import React from 'react';
import sliderone from "/src/assets/vendersliderimages/Cleansing 🧼🧖🏾_♀️.jpeg";
import slidertwo from "/src/assets/makeup.jpeg";
import sliderthree from "/src/assets/vendersliderimages/24 Moisturizing Products For Every Inch Of Your Body.jpeg";
import sliderfour from "/src/assets/vendersliderimages/nails.jpeg";
import sliderfive from "/src/assets/vendersliderimages/beautyshop.jpeg";

import sliderSix from "/src/assets/vendersliderimages/felipepelaquim-ywE0IlojSI8-unsplash.jpg";
import sliderseven from "/src/assets/vendersliderimages/kimia-zarifi-x4J_92kJBoY-unsplash.jpg";
import slidereight from "/src/assets/vendersliderimages/nika-benedictova-6AEZRIVkfT0-unsplash.jpg";
import slidernine from "/src/assets/vendersliderimages/package.jpeg";
import sliderten from "/src/assets/vendersliderimages/Treat Your Haircare Routine Like Your Skincare Routine.jpeg";

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

const showTwoSlides = [
  { id: 1, image: sliderSix },
  { id: 2, image: sliderseven },
  { id: 3, image: slidereight },
  { id: 4, image: slidernine },
  { id: 5, image: sliderten },
];

const VenderSectionFour = () => {
  return (
    <>
      <div className="px-4 sm:px-6 py-8">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {showOneSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center max-w-screen-md mx-auto">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="object-cover rounded-lg shadow-md w-full h-[200px] sm:h-[250px] md:h-[300px]"
                />
                <div className="flex justify-between items-center w-full mt-3 px-2">
                  <div className="flex">
                    <FaStar size={20} className="text-orange-500" />
                    <FaStar size={20} className="text-orange-500" />
                    <FaStar size={20} className="text-orange-500" />
                    <FaStar size={20} className="text-orange-500" />
                    <FaStar size={20} className="text-gray-400" />
                  </div>
                  <FaHeart size={20} className="text-red-600" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Second Slider */}
      <div className="px-4 sm:px-6 py-8">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {showTwoSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center max-w-screen-md mx-auto">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="object-cover rounded-lg shadow-md w-full h-[200px] sm:h-[250px] md:h-[300px]"
                />
                <div className="flex justify-between items-center w-full mt-3 px-2">
                  <div className="flex">
                    <FaStar size={20} className="text-orange-500" />
                    <FaStar size={20} className="text-orange-500" />
                    <FaStar size={20} className="text-orange-500" />
                    <FaStar size={20} className="text-gray-400" />
                    <FaStar size={20} className="text-gray-400" />
                  </div>
                  <FaHeart size={20} className="text-red-600" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default VenderSectionFour;
