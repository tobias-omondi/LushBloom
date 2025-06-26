/* LandingScroll.jsx */
import React from 'react';
import skincare1 from '/src/assets/skincare1.jpeg';
import skincare2 from '/src/assets/skincare2.jpeg';
import skincare3 from '/src/assets/skincare3.jpeg';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import SectionThree from './SectionThree';

const images = [
  {
    src: skincare1,
    title: 'Hydrating Cleanser',
    description: 'Gently removes dirt while keeping your skin moisturized.'
  },
  {
    src: skincare2,
    title: 'Glow Serum',
    description: 'Brightens and rejuvenates your skin with natural ingredients.'
  },
  {
    src: skincare3,
    title: 'Soothing Cream',
    description: 'Calms irritated skin and locks in moisture all day.'
  }
];

const LandingScroll = () => (
  <>
    <div className="mt-16 py-10 text-center mx-auto max-w-screen-xl">
      {/* Heading */}
      <motion.h2
        initial={{ filter: 'blur(5px)', opacity: 0 , x: -20 }}
        whileInView={{ filter: 'blur(0)', opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="text-xl md:text-3xl font-extrabold mb-4 text-black"
      >
        Our Skincare Collection
      </motion.h2>

      {/* Sub‑heading */}
      <motion.p
        initial={{ filter: 'blur(5px)', opacity: 0 , y: 20, }}
        whileInView={{ filter: 'blur(0)', opacity: 1 , y: 0, }}
        transition={{ duration: 1.2 }}
        className="text-lg mb-10 max-w-3xl mx-auto text-black"
      >
        Explore our exclusive range of skincare products tailored for glowing, healthy skin.
      </motion.p>

      {/* —— GRID —— */}
      <div
        className="
          grid place-items-center
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-2
          mx-auto
        "
      >
        {images.map(({ src, title, description }, idx) => (
          <div
            key={idx}
            className="
              flex flex-col items-center justify-between
              w-72 h-[28rem] p-4 rounded-xl bg-gray-800 shadow-xl
            "
          >
            <img
              src={src}
              alt={title}
              className="w-full h-64 object-cover rounded-xl shadow-2xl"
            />

            <motion.h3
              initial={{ filter: 'blur(5px)', opacity: 0 }}
              whileInView={{ filter: 'blur(0)', opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl font-semibold text-white"
            >
              {title}
            </motion.h3>

            <motion.p
              initial={{ filter: 'blur(5px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-center px-2 text-white"
            >
              {description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-10 bg-blue-500 py-4 px-5 rounded-xl text-white hover:bg-blue-600 transition"
      >
        Select a suitable budget
      </button>
    </div>

    {/* Additional sections */}
    <SectionThree />
    <Footer />
  </>
);

export default LandingScroll;
