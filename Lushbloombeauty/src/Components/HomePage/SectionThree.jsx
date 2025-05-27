import React from 'react'
import skincareproduct from '/src/assets/skincareproduct.jpeg'
import SectionFour from './SectionFour'

const SectionThree = () => {
  return (
    <>
    <div className='bg-black'>
    <div className=' w-full p-10 flex flex-col md:flex-row justify-evenly items-center'>
        <div className='text-center'>
           <h1 className='text-white text-2xl md:text-4xl font-medium md:text-start'>Onile and In Person</h1> 
           <p className='text-white w-full md:w-3/4 md:text-start md:text-xl py-3 font-light'>Our beauty products are available both online for convenient shopping and in person for a personalized experience.</p>
           <p className='text-white w-full md:w-3/4 md:text-start md:text-xl py-2 font-light'>Whether you prefer browsing from home or getting expert advice face-to-face, we’ve got you covered.</p>
        </div>
      <div>
        <img src={skincareproduct} alt='skincare product' className='w-[300px] h-[300px] object-cover opacity-55 shadow-2xl border-2 rounded-4xl '/>
      </div>
      </div>
      <div className='flex justify-center py-8'>
      <button type='submit' className='bg-orange-500 justify-center text-white font-light cursor-pointer py-2 px-4 rounded '>Buy Now</button>
      </div>
    </div>
    <SectionFour/>
    </>
  )
}

export default SectionThree
