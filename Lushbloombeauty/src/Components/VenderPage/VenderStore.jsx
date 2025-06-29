import React, {useRef , useEffect} from 'react';
import Navbar from '../../Navbar';
import '../../App.css'
import backgroundimage from '/src/assets/venderherosection.jpg'
import backgroundimagemobile from '/src/assets/vendorherosmall.jpg'

// import afrcanpicturewoman from '/src/assets/africanlady.jpg'


const VenderStore = () => {
  return (

    // this is a Venderherosection 
    <>
    <div className=' relative w-full h-screen -mt-24 md:-mt-20'>
      {/* Background Image for Large Screens */}
      <div className='absolute top-4 md:top-0 left-0 w-full z-20 bg-black'>
        <Navbar />
      </div>

      {/* Page Content Centered */}
      <div className='absolute top-1/2 left-0 transform -translate-y-1/2 z-20 text-start px-12 shadow'> 
        <h1 className='text-2xl md:text-5xl font-extrabold mt-28 text-black'>Grow Your Brand with Us</h1>
        <h4 className='md:text-2xl font-medium mt-5'>
        Join creators and artisans redefining beauty. Shine, sell, and grow with LushBloom.
        </h4>
        <button type='submit' className='bg-blue-500 text-white rounded p-3 mt-10 border-blue-800 cursor-pointer px-6 py-3'>Start Selling</button>
      </div>
    </div>
    </>
  );
};

export default VenderStore;
