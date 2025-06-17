import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { AiFillTikTok } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <>
    <div className='footer-section'>
      <h1 className='text-white text-sm md:text-xl text-center md:w-2/3 md:mx-auto font-medium'>LushBloom is a beauty marketplace for vendors to sell their products online. Join our community and grow your brand with us.</h1>
    </div>

    {/* main footer container */}

    <div className='bg-gray-950 p-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '>
      <div className='w-28 '>
        <img src='https://i.pinimg.com/736x/fa/0f/84/fa0f8436af0ae70e7a9fc41c1c90d353.jpg' alt='logo image' />
      </div>

      {/* title for the page */}
      <div className='text-white text-2xl text-start'>
        <h2 className='text-gray-500'>LushBloom Beauty</h2>
        <div className='flex flex-col py-4 text-xl font-light '>
          <Link to='/' className='py-1'>Home</Link>
          <Link to='/vendor-store' className='py-1' >Vendor Store</Link>
          <Link to='/help' className='py-1' >Help</Link>
          <Link to='/contact-us' className='py-1' >Contact Us</Link>
          <Link to='/sign-in' className='py-1' >Sign In</Link>
          <Link to='/about' className='py-1' >About</Link>
        </div>
      </div>

      {/* Products links */}
      <div className='text-white text-2xl text-start'>
        <h2 className='text-gray-500'>LushBloom Products</h2>
        <div className='flex flex-col py-4 text-xl font-light '>
          <Link to='/shop' className='py-1'>shop</Link>
          <Link to='/shop-plus' className='py-1' >Shop Plus</Link>
          <Link to='/shop-psy' className='py-1' >Shop Pay</Link>
          <Link to='/shopify lushbloom' className='py-1' >Shopify for Enterprse</Link>
        </div>
      </div>

        {/* social links  */}
        <div className='text-white text-2xl text-start'>
        <h2 className='text-gray-500'>LushBloom Contacts</h2>
        <div className='flex flex-col py-4 text-xl font-light '>
          <h2>Email: <span className='cursor-pointer hover:text-gray-700'>lushbloom@gmail.com</span></h2>
          <h2>Phone number: <span className='cursor-pointer hover:text-gray-700'>+254 741 041 580 | add phone number</span></h2>
        </div>
      </div>

      {/* social media links */}
       <div className='w-2/3 mx-auto text-center h-1 bg-blue-500 rounded-full'>
        <div className='flex flex-row gap-5 items-center justify-center py-5 '>  
        <a href='' className='text-white '> <CiLinkedin size={25}/> </a>
        <a href='' className='text-white'> <RiTwitterXFill size={25}/> </a>
        <a href='' className='text-white'> <CiInstagram size={25}/> </a>
        <a href='' className='text-white'> <AiFillTikTok size={25}/> </a>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Footer
