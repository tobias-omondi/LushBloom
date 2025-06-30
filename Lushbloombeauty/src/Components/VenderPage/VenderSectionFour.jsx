import React from 'react';
import sliderone from "/src/assets/beauty.jpeg";
import slidertwo from "/src/assets/makeup.jpeg";
import { FaStar, FaHeart } from "react-icons/fa";

const showOneSlides = [
  {
    id: 1,
    image: sliderone,
  },
  {
    id: 1,
    image: slidertwo,
  }
];

const VenderSectionFour = () => {
  return (
    <div>
      <h1>Slider Images</h1>
      <div className='flex flex-row gap-5'>
        {showOneSlides.map((slide) => (
          <img
            className='object-cover'
            key={slide.id}
            src={slide.image}
            alt={`Slide ${slide.id}`}
            style={{ width: "100%", maxWidth: "300px", height: "300px", marginBottom: "1rem" }}
          />
        ))}
        <FaStar  size={25} className='text-yellow-500'/>
        <FaHeart  size={25} className='text-red-600'/>
      </div>
    </div>
  );
};

export default VenderSectionFour;
