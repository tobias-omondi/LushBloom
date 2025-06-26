import React from 'react'
import beauty3 from '/src/assets/beauty4.webp'
import LandingScroll from './LandingScroll'

// import motion
 import {motion} from "framer-motion"

const SectionTwo = () => {
  return (
    <>
    <div className='mt-12 flex flex-col md:flex-row justify-evenly  items-center w-full p-10 '>
        <div className='w-full md:w-2/4'>
            <motion.h1
                initial={{ opacity: 0, x: -50,  filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6 }} className='text-gray-950 text-2xl  md:text-3xl py-2 md:py-5 font-medium text-center '>From small teams to large organizations</motion.h1>
            <motion.p 
             initial = {{opacity: 0, y: 20,}}
             whileInView={{opacity: 1, y:0}}
             transition={{duration: 1}} className='text-center mx-auto text-black '>Discover a platform crafted for beauty visionaries of every kind. Whether you're launching your first skincare line or managing a thriving salon, we give you the tools to grow, sell, and shine. From bold indie brands to luxury cosmetics labels, we help bring your beauty business to life online and in person. Seamlessly showcase your products, connect with your audience, and make every interaction unforgettable. Because in beauty, every detail matters and so does your brand.</motion.p>
        </div>
        <motion.div className='mt-12'
        initial = {{opacity: 0, x: 50 , filter: 'blur(8px)'}}
        whileInView={{opacity:1, x: 0, filter: 'blur(0px)'}}
        transition={{duration: 0.8}}>
            <img src={beauty3} alt='a woman doing makeup' className='h-[350px] w-full object-cover rounded-xl' />
        </motion.div>
    </div>
    <LandingScroll/>
    </>
  )
}

export default SectionTwo
