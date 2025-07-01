import React from 'react';
import Navbar from '../../Navbar';
import '../../App.css';
import backgroundimage from '/src/assets/vendorheroimage.jpg';
import VenderSlider from './VendorSlider';
import VenderSectionThree from './VenderSectionThree';
import VenderSectionFour from './VenderSectionFour';
import VenderDashLink from './VenderDashLink';
import Footer from '../Footer';

const VenderHomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-white overflow-hidden">
        {/* Navbar - Fixed at top */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90">
          <Navbar />
        </header>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col md:flex-row items-center justify-between pt-32 md:pt-24 pb-16">
          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Grow Your Brand with Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4 mb-8">
              Join creators and artisans redefining beauty. Shine, sell, and grow with LushBloom.
            </p>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-3 shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Selling
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center md:justify-end">
            <img
              src={backgroundimage}
              alt="Vendor showcasing products"
              className="w-full max-w-2xl rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Page Sections */}
      <VenderSlider />
      <VenderSectionThree  
        title="Become a Vendor at LushBloom" 
        description={`
          Welcome to the LushBloom Vendor Hub, where entrepreneurs and creators come together to share their unique products with a vibrant community. If you're passionate about floral designs, handmade crafts, or botanical treasures, our platform is the perfect place to grow your business. As a vendor, you'll gain access to a seamless storefront, dedicated support, and an engaged customer base eager to discover your creations.
          
          Join LushBloom today and start selling your products to a wider audience. Our easy-to-use platform allows you to manage listings, track sales, and showcase your brand to those who appreciate quality and creativity. Whether you're a seasoned florist or a budding artisan, LushBloom offers the tools and community you need to succeed. Grow your business with us and be part of a flourishing marketplace!
        `} 
      />
      <VenderSectionFour />
      <VenderDashLink 
        title="Vendor Dashboard"
        description={`
          Welcome to your Vendor Dashboard! This is where you can manage your store, track sales, update product listings, and interact with your customers. Our easy-to-use platform helps you streamline your business, giving you more time to focus on growing your brand. With everything at your fingertips, you can stay on top of orders, promotions, and all the tools you need to succeed.

          Take control of your business today and get started with managing your products, tracking your sales, and making the most out of your LushBloom vendor experience.
        `}
      />
      <Footer />
    </div>
  );
};

export default VenderHomePage;