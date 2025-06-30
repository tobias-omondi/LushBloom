import React from 'react';
import Navbar from '../../Navbar';
import '../../App.css';
import backgroundimage from '/src/assets/vendorheroimage.jpg';
import VenderSlider from './VendorSlider';
import VenderSectionThree from './VenderSectionThree';
import VenderSectionFour from './VenderSectionFour';

const VenderHomePage = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-white overflow-hidden -mt-24 md:-mt-24 shadow p-10">
        {/* Navbar */}
        <div className='absolute top-4 md:top-0 left-0 w-full z-20 bg-black'>
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center justify-between h-full w-full px-6 md:px-16 z-20 relative mt-20 md:mt-20">
          {/* Text Section */}
          <div className="flex flex-col max-w-xl md:mt-0 mt-10 w-1/2">
            <h1 className="text-5xl md:text-5xl font-bold text-black">
              Grow Your Brand with Us
            </h1>
            <h4 className="text-lg md:text-2xl  mt-4 text-gray-800">
              Join creators and artisans redefining beauty. Shine, sell, and grow with LushBloom.
            </h4>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg mt-8 px-6 py-3 shadow-md transition w-1/3"
            >
              Start Selling
            </button>
          </div>

          {/* Image Section */}
          <div className="mt-10 md:mt-0 md:w-2/3 flex justify-end">
            <img
              src={backgroundimage}
              alt="Vendor hero"
              className="w-full md:w-[80%] max-h-[400px] object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
      <VenderSlider />
      <VenderSectionThree  
      title="Become a Vendor at LushBloom" 
      description={`
        Welcome to the LushBloom Vendor Hub, where entrepreneurs and creators come together to share their unique products with a vibrant community. If you’re passionate about floral designs, handmade crafts, or botanical treasures, our platform is the perfect place to grow your business. As a vendor, you'll gain access to a seamless storefront, dedicated support, and an engaged customer base eager to discover your creations.
        
        Join LushBloom today and start selling your products to a wider audience. Our easy-to-use platform allows you to manage listings, track sales, and showcase your brand to those who appreciate quality and creativity. Whether you're a seasoned florist or a budding artisan, LushBloom offers the tools and community you need to succeed. Grow your business with us and be part of a flourishing marketplace!
        `} />
      <VenderSectionFour />
    </>
  );
};

export default VenderHomePage;
