import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import wholesaleone from '/src/assets/wholesalepackage1.jpeg';
import wholesaletwo from '/src/assets/chefwithfood.jpeg';
import wholesalethree from '/src/assets/wholesalepackage.jpeg';
import wholesalefour from '/src/assets/wholesalefamily.jpeg';
import wholesalefive from '/src/assets/wholesalefood.jpeg';

const wholeSaleImages = [
  { id: 1, image: wholesaleone },
  { id: 2, image: wholesaletwo },
  { id: 3, image: wholesalethree },
  { id: 4, image: wholesalefour },
  { id: 5, image: wholesalefive },
];

const LandingWholeSalares = ({ Title, Description }) => {
  return (
    <div className="bg-black py-10 px-4">
      <div>
        <h1 className="text-gray-200 text-3xl md:text-5xl py-2 md:py-5 font-bold"> {Title} </h1>
        <h3 className="text-gray-400 py-4 md:py-3 text-xl md:text-4xl"> {Description} </h3>
      </div>

      <div className="max-w-6xl mx-auto mt-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
          }}
          speed={1500} // Smooth transition speed (1.5s)
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {wholeSaleImages.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image}
                alt={`slide-${index}`}
                className="w-full h-[400px] object-cover rounded transition-all duration-1000"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LandingWholeSalares;
