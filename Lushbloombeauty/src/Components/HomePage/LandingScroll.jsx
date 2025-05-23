import React from 'react';
import skincare1 from '/src/assets/skincare1.jpeg';
import skincare2 from '/src/assets/skincare2.jpeg';
import skincare3 from '/src/assets/skincare3.jpeg';
import { motion, useInView, AnimatePresence } from "motion/react"

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="mt-16 bg-amber-950 py-10 px-1 rounded shadow text-white text-center">
      <motion.h2 
       initial={{ filter: "blur(5px)", opacity: 0 }}
       whileInView={{ filter: "blur(0px)", opacity: 1 }}
       transition={{ duration: 1.2 }}
      className="text-3xl md:text-5xl font-extrabold mb-4">Our Skincare Collection</motion.h2>
      <motion.p
       initial={{ filter: "blur(5px)", opacity: 0 }}
       whileInView={{ filter: "blur(0px)", opacity: 1 }}
       transition={{ duration: 1.2 }} className="text-lg mb-10 max-w-3xl mx-auto">
        Explore our exclusive range of skincare products tailored for glowing, healthy skin.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-stretch gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-xl ${image.bgColor} text-black w-[300px] h-[500px]`}
          >
            <img
              src={image.src}
              alt={`skincare-${index + 1}`}
              className="w-full h-[300px] md:h-[340px] object-cover rounded-4xl"
            />
            <motion.h3 
              initial={{ filter: "blur(5px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-xl font-semibold mt-8">{image.title}</motion.h3>
            <motion.p 
              initial={{ filter: "blur(8px)", opacity: 0 ,y:20 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y:0 }}
              transition={{ duration: 1.3 }}
              className="text-sm mt-3 text-center px-2">{image.description}</motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingScroll;
