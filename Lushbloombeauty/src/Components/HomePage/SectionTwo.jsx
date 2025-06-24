import React from 'react'
import beauty3 from '/src/assets/beauty4.jpeg'
import LandingScroll from './LandingScroll'

const SectionTwo = () => {
  return (
    <>
    <div className='mt-12 flex flex-col md:flex-row justify-evenly  items-center w-full p-10 shadow'>
        <div className='w-full md:w-2/4'>
            <h1 className='text-gray-950 text-2xl  md:text-3xl py-2 md:py-5 font-medium text-center '>From small teams to large organizations</h1>
            <p className='text-center mx-auto text-black '>Discover a platform crafted for beauty visionaries of every kind. Whether you're launching your first skincare line or managing a thriving salon, we give you the tools to grow, sell, and shine. From bold indie brands to luxury cosmetics labels, we help bring your beauty business to life online and in person. Seamlessly showcase your products, connect with your audience, and make every interaction unforgettable. Because in beauty, every detail matters and so does your brand.</p>
        </div>
        <div className='mt-12'>
            <img src={beauty3} alt='a woman doing makeup' className='h-[350px] w-[300px] object-cover rounded-3xl' />
        </div>
    </div>
    <LandingScroll/>
    </>
  )
}

export default SectionTwo
