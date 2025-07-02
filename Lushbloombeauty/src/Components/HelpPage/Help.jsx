import React from 'react';
import Navbar from '../../Navbar';
import '../../App.css';
import Footer from '../Footer';

const Help = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden">
        {/* Navbar - Fixed at top */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90">
          <Navbar />
        </header>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col md:flex-row items-center justify-between pt-16 pt-2b-16">


          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-7xl lg:text-6xl font-medium text-gray-600 leading-tight text-center md:text-start mt-10">
              HELP CENTER
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4 mb-8 text-center md:text-start">
              Your go-to place for quick answers, order help, and vendor support—because your experience matters.
            </p>
          </div>
         
        </div>
      </section>

       {/* faq statement */}
       <div className='mt-16 px-10'>
         <h1 className='text-4xl text-gray-700'>FAQ <span className='text-2xl text-gray-700'>s</span></h1>

         {/* Help title */}
         <h2 className='text-3xl text-gray-600 py-3 w-3/4'>Welcome to the Lush Bloom Help Center</h2>

         {/* paragraph for the faq */}

         <p className='text-gray-600 w-3/4'>At Lush Bloom, we’re here to make your experience as smooth and beautiful as the products we offer. Whether you’re a new visitor exploring our floral collections or a returning customer managing your orders, the Help Center is your one-stop space for answers, guidance, and support.

         From shopping tips and delivery details to vendor information and account management, we’ve organized everything to help you get the support you need—quickly and easily. If you can’t  what you’re looking for, our support team is just a message away.

         Let’s grow something beautiful together.</p>
       </div>


   
      <Footer />
    </div>
  );
};

export default Help;