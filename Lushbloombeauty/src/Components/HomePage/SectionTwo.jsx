import React from 'react'
import beauty3 from '/src/assets/beauty4.jpeg'

const SectionTwo = () => {
  return (
    <div className='mt-12 flex flex-col md:flex-row justify-evenly'>
        <div className='w-full md:w-2/4'>
            <h1 className='text-white text-3xl md:text-5xl py-2 md:py-5 font-bold text-center '>From small teams to large organizations</h1>
            <p className='text-center text-xl text-gray-800'>Discover a platform crafted for beauty visionaries of every kind. Whether you're launching your first skincare line or managing a thriving salon, we give you the tools to grow, sell, and shine. From bold indie brands to luxury cosmetics labels, we help bring your beauty business to life online and in person. Seamlessly showcase your products, connect with your audience, and make every interaction unforgettable. Because in beauty, every detail matters and so does your brand.</p>
        </div>
        <div>
            <img src={beauty3} alt='a woman doing makeup' className='h-[400px] w-[500px] object-cover rounded-3xl' />
        </div>
    </div>
  )
}

export default SectionTwo
