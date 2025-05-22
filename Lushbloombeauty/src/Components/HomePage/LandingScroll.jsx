import React from 'react';
import skincare1 from '/src/assets/skincare1.jpeg';
import skincare2 from '/src/assets/skincare2.jpeg';
import skincare3 from '/src/assets/skincare3.jpeg';

const images = [
  {
    src: skincare1,
    bgColor: 'bg-rose-100',
    title: 'Hydrating Cleanser',
    description: 'Gently removes dirt while keeping your skin moisturized.'
  },
  {
    src: skincare2,
    bgColor: 'bg-amber-200',
    title: 'Glow Serum',
    description: 'Brightens and rejuvenates your skin with natural ingredients.'
  },
  {
    src: skincare3,
    bgColor: 'bg-lime-100',
    title: 'Soothing Cream',
    description: 'Calms irritated skin and locks in moisture all day.'
  }
];

const LandingScroll = () => {
  return (
    <div className="mt-16 bg-amber-950 py-10 px-6 rounded shadow text-white text-center">
      <h2 className="text-5xl font-extrabold mb-4">Our Skincare Collection</h2>
      <p className="text-lg mb-10 max-w-3xl mx-auto">
        Explore our exclusive range of skincare products tailored for glowing, healthy skin.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-xl ${image.bgColor} text-black w-[370px] h-[500px]`}
          >
            <img
              src={image.src}
              alt={`skincare-${index + 1}`}
              className="w-full h-[340px] object-cover rounded-4xl"
            />
            <h3 className="text-xl font-semibold mt-8">{image.title}</h3>
            <p className="text-sm mt-3 text-center px-2">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingScroll;
