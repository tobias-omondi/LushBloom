import React, { useState, useEffect } from 'react';
import '../../App.css';
import salonimage from '/src/assets/package.jpeg'; 
import marketgraph from '/src/assets/market.jpeg';
import extra1 from '/src/assets/lip.jpeg';
import extra2 from '/src/assets/salon.jpeg';
import bgvideo from '/src/assets/background.mp4';

const SectionFour = () => {
  const [showFirstPair, setShowFirstPair] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstPair(prev => !prev);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75 z-0 rounded-b-3xl"
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row gap-4 items-center justify-evenly h-full px-4">
        <img
          src={showFirstPair ? salonimage : extra1}
          alt="img1"
          className="w-[250px] h-[300px] object-cover rounded-2xl transition-opacity duration-1000"
        />

        <div className="mt-0 md:mt-32">
          <img
            src={showFirstPair ? marketgraph : extra2}
            alt="img2"
            className="hidden md:block w-[250px] h-[300px] object-cover rounded-2xl transition-opacity duration-1000"
          />
        </div>

        <div className="flex flex-col items-center text-white">
          <h2 className="text-xl md:text-3xl px-1 py-3 text-center font-medium">
            Begin building your catalog
          </h2>
          <h2 className="text-xl md:text-3xl px-1 py-3 text-center font-medium">
            Make your shop uniquely yours
          </h2>
          <h2 className="text-xl md:text-3xl px-1 py-3 text-center font-medium">
            Get ready to accept payments from customers
          </h2>
          <div className="py-3">
            <button className="bg-orange-500 py-2 px-4 rounded text-white cursor-pointer font-light">
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
