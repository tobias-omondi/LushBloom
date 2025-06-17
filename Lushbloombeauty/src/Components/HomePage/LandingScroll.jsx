import React from 'react';
import skincare1 from '/src/assets/skincare1.jpeg';
import skincare2 from '/src/assets/skincare2.jpeg';
import skincare3 from '/src/assets/skincare3.jpeg';
import { motion } from "framer-motion"; // Corrected import for framer-motion
import Footer from '../Footer';
import SectionThree from './SectionThree';


const images = [
  {
    src: skincare1,
    bgColor: 'bg-black',
    title: 'Hydrating Cleanser',
    description: 'Gently removes dirt while keeping your skin moisturized.'
  },
  {
    src: skincare2,
    bgColor: 'bg-black',
    title: 'Glow Serum',
    description: 'Brightens and rejuvenates your skin with natural ingredients.'
  },
  {
    src: skincare3,
    bgColor: 'bg-black',
    title: 'Soothing Cream',
    description: 'Calms irritated skin and locks in moisture all day.'
  }
];

const LandingScroll = () => {
  return (
    <>
      <div className="mt-16 brightness-125 py-10 px-2 rounded-xl shadow text-white text-center mx-auto items-center w-5/6">
        {/* Animated Heading */}
        <motion.h2
          initial={{ filter: "blur(5px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-3xl md:text-5xl font-extrabold mb-4 text-black"
        >
          Our Skincare Collection
        </motion.h2>

        {/* Animated Subheading */}
        <motion.p
          initial={{ filter: "blur(5px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-lg mb-10 max-w-3xl mx-auto text-black"
        >
          Explore our exclusive range of skincare products tailored for glowing, healthy skin.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5  justify-center items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl ${image.bgColor} w-[300px] h-[500px] shadow-xl flex flex-col items-center`}
            >
              <img
                src={image.src}
                alt={`skincare-${index + 1}`}
                className="w-full h-[300px] md:h-[340px] object-cover rounded-4xl shadow-2xl"
              />
              <motion.h3
                initial={{ filter: "blur(5px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-xl font-semibold mt-8 text-white"
              >
                {image.title}
              </motion.h3>
              <motion.p
                initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-sm mt-3 text-center px-2 text-white"
              >
                {image.description}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className='mt-7 items-center'>
          <button
            type='submit'
            className='bg-blue-500 py-4 px-2 rounded-xl font-light cursor-pointer'
          >
            Select a suitable budget
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <SectionThree />
      <Footer />
    </>
  );
};

export default LandingScroll;
