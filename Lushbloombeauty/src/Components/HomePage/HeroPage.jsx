import React, {useRef , useEffect} from 'react';
import Navbar from '../../Navbar';
import '../../App.css'
import CardSwiper from './CardSwiper';
import backgroundimage from '/src/assets/heropage.webp'
import backgroundimagemobile from '/src/assets/heropage.webp'

// use of aos animation plugins
import AOS from 'aos';
import 'aos/dist/aos.css';

import './HeroPage.css'

// use of framer motion plugins
 import {motion} from "framer-motion"


const HeroPage = () => {
  useEffect (() => {
    AOS.init ({duration: 2500, once: true});
  },[])

  return (

    <>
    <div className=' relative w-full h-screen'>

      {/* for larger screen  */}
      <img src={backgroundimage} alt='Essential oil drop on hand' className="hidden sm:block absolute inset-0 w-full h-full object-cover brightness-50" />

      {/* Smallscreen */}
      <img src={backgroundimagemobile} alt='african lady with a makeup'  className='block sm:hidden absolute inset-0 w-full h-full object-cover brightness-75' />


      <div className='absolute top-4 md:top-0 left-0 w-full z-20'>
        <Navbar />
      </div>

      {/* Page Content Centered */}
      <div className='absolute top-1/2 left-0 transform -translate-y-1/2 z-20 text-start px-12' data-aos = "fade-up">
         <div className='text-white text-5xl md:text-7xl font-medium ' ><h1>Lush-Bloom</h1></div> 
         <div className='text-white text-2xl md:text-4xl font-mono py-3'><h3>FOR BEAUTY LOVERS ONLY</h3></div>

           {/* button */}

           <div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            type='submit'   className="bg-blue-600 text-white py-2 px-5 rounded-2xl hover:bg-blue-700">START NOW</motion.button>
           </div>


      </div>

    

    </div>
      <div className='w-full z-10'>
        <CardSwiper />
      </div>
    </>
  );
};

export default HeroPage;
