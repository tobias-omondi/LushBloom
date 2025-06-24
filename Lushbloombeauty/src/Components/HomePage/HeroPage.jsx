import React, {useRef , useEffect} from 'react';
import Navbar from '../../Navbar';
import '../../App.css'
import LandingSales from './LandingSales';
import backgroundimage from '/src/assets/heropage.webp'
import backgroundimagemobile from '/src/assets/Leonardo_Kino_XL_beauty_products_3.jpg'

import './HeroPage.css'

const HeroPage = () => {
  return (
    <>
    <div className=' relative w-full h-screen -mt-24 md:-mt-20'>

      {/* for larger screen  */}
      <img src={backgroundimage} alt='Essential oil drop on hand' className="hidden sm:block absolute inset-0 w-full h-full object-cover brightness-50" />

      {/* Smallscreen */}
      <img src={backgroundimagemobile} alt='african lady with a makeup'  className='block sm:hidden absolute inset-0 w-full h-full object-cover brightness-75' />


      <div className='absolute top-4 md:top-0 left-0 w-full z-20'>
        <Navbar />
      </div>

      {/* Page Content Centered */}
      <div className='absolute top-1/2 left-0 transform -translate-y-1/2 z-20 text-start px-12'>
         <div className='text-white text-6xl font-medium '><h1>Lush-Bloom</h1></div> 
         <div className='text-white text-3xl font-mono py-3'><h3>FOR BEAUTY LOVERS ONLY</h3></div>

           {/* button */}

           <div>
            <button type='submit' className='bg-blue-600 text-white py-2 px-5 rounded-2xl cursor-pointer hover:delay-100 hover:translate-0.5 hover:bg-blue-700 '>START NOW</button>
           </div>
      </div>

    

    </div>
    <div className='w-full z-10'>
        <LandingSales />
      </div>
    </>
  );
};

export default HeroPage;
