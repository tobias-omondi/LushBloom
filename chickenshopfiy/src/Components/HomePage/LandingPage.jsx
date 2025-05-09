import React from 'react'
import Navbar from '../../Navbar'
import chickenfries from '/src/assets/chickenlandingpage.jpeg';

const LandingPage = () => {
  return (
    <div>
      <div className='relative w-screen '>
        <img src={chickenfries} alt='chicken fried' className='w-full brightness-75 object-cover' />
      </div>
      <div className='z-20 absolute top-1/4 mx-auto'>
      <Navbar />
      </div>
      <div className='z-20 absolute top-1/2 left-10 '>
        <h1 className='text-7xl font-extrabold mt-50'>CHICKEN SHOPIFY</h1>
        <h4 className='text-4xl font-bold mt-5'>For Chicken Livers <br/>Only</h4>
      </div>
    </div>
  )
}

export default LandingPage
