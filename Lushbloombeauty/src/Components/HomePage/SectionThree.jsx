import React from 'react'
import skincareproduct from '/src/assets/skincareproduct.jpeg'

const SectionThree = () => {
  return (
    <div className='bg-yellow-950'>
    <div className=' w-full p-10 flex justify-evenly items-center'>
        <div className=''>
           <h1 className='text-white text-3xl md:text-5xl font-extrabold'>Onile and In Person</h1> 
           <p className='text-white w-2/3 text-xl py-5'>Our beauty products are available both online for convenient shopping and in person for a personalized experience.</p>
           <p className='text-white w-2/3 text-xl py-2'>Whether you prefer browsing from home or getting expert advice face-to-face, we’ve got you covered.</p>
        </div>
      <div>
        <img src={skincareproduct} alt='skincare product' className='w-[300px] h-[300px] object-cover opacity-55 rounded-4xl '/>
      </div>
      </div>
      <div className='flex justify-center p-5'>
      <button type='submit' className='bg-orange-700 justify-center text-white font-bold cursor-pointer py-2 px-4 rounded-xl '>Buy Now</button>
      </div>
    </div>
  )
}

export default SectionThree
