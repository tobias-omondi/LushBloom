import React, { useState, useEffect } from 'react';
import '../../App.css';
import salonimage from '/src/assets/package.jpeg'; 
import marketgraph from '/src/assets/market.jpeg';
import extra1 from '/src/assets/lip.jpeg';
import extra2 from '/src/assets/salon.jpeg';

const SectionFour = () => {
  const [showFirstPair, setShowFirstPair] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstPair(prev => !prev);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="section-four">
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-evenly">
        <img
          src={showFirstPair ? salonimage : extra1}
          alt="img1"
          className="w-[250px] h-[300px] object-cover rounded-2xl transition-opacity duration-1000"
        />

        {/* Second Image */}
        <div className="mt-0 md:mt-32">
          <img
            src={showFirstPair ? marketgraph : extra2}
            alt="img2"
            className="hidden md:block w-[250px] h-[300px] object-cover rounded-2xl transition-opacity duration-1000"
          />
        </div>
        <div className='flex flex-col items-center'>
        <h2 className='text-white text-xl md:text-3xl px-1 py-3 text-center font-bold'>
            <span>Begin building your catalog</span>
        </h2>
        <h2 className='text-white text-xl md:text-3xl px-1 py-3 text-center font-bold'>
            <span> Make your shop uniquely yours</span>
        </h2>
        <h2 className='text-white text-xl md:text-3xl px-1 py-3 text-center font-bold'>
        <span className=''>Get ready to accept payments from customers</span>
        </h2>
        <div className='py-3'>
        <button type='submit' className='bg-orange-700 py-2 px-4 rounded text-white cursor-pointer font-bold'>Start Selling</button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
