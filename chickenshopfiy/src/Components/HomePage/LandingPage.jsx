import React from 'react';
import chickenfries from '/src/assets/bites chicken.jpg';
import Navbar from '../../Navbar';
import '../../App.css'

const LandingPage = () => {
  return (
    <>
    <div className='relative w-full h-screen -mt-20'>
      {/* Background Image */}
      <img
        src={chickenfries}
        alt='chicken fried'
        className='absolute inset-0 w-full h-full object-cover brightness-75'
      />

      {/* Navbar on top */}
      <div className='absolute top-0 left-0 w-full z-20'>
        <Navbar />
      </div>

      {/* Page Content Centered */}
      <div className='absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20 text-start text-white'>
        <h1 className='text-7xl font-extrabold mt-28'>CHICKEN SHOPIFY</h1>
        <h4 className='text-4xl font-bold mt-5'>
          For Chicken Lovers <br /> Only
        </h4>
        <button type='submit' className='bg-black opacity-75 text-white rounded p-3 mt-10 border-orange-600 cursor-pointer px-6 py-3'>Shop Today</button>
      </div>
    </div>
    <div>
        ivkevwoevjo
      </div>
    </>
  );
};

export default LandingPage;
