import React from 'react';
import skincareproduct from '/src/assets/Beautiful black girl with shopping bags in a city _ Free Photo.jpeg';
import Cards from './Cards';

// import framer-motion

import {motion} from 'framer-motion'

const SectionThree = () => {
  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
      >
        <source
          src="https://res.cloudinary.com/djyfoquip/video/upload/v1748410650/background_crpuk0.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-6 md:px-16 gap-10 p-10">
        {/* Text Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              
              className="text-center lg:text-left max-w-lg">
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-snug">
            Shop Online or In-Person
          </h1>
          <p className="text-white text-md md:text-lg mt-6 font-light">
            Explore our curated selection of beauty products from the comfort of your home or visit us in person for a hands-on experience with expert guidance.
          </p>
          <p className="text-white text-md md:text-lg mt-3 font-light">
            Convenience meets care — discover your best look today.
          </p>

          {/* Button */}
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-orange-300 font-medium">
              Buy Now
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[350px] lg:h-[450px] overflow-hidden rounded-3xl shadow-2xl border-4 border-white mt-10">
          <img
            src={skincareproduct}
            alt="Skincare product"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <Cards />
    </>
  );
};

export default SectionThree;
