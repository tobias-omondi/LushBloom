import React from 'react';
import Navbar from '../../Navbar';
import '../../App.css';
import Footer from '../Footer';

const Help = () => {
  return (
    <>
      {/* Navbar - Fixed at top */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mt-10">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-700">
              HELP CENTER
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Your go-to place for quick answers, order help, and vendor support—because your experience matters.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-700 mb-2">FAQs</h2>
          <h3 className="text-2xl text-gray-600 mb-4">
            Welcome to the Lush Bloom Help Center
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            At Lush Bloom, we’re here to make your experience as smooth and beautiful as the products we offer. Whether you’re a new visitor exploring our floral collections or a returning customer managing your orders, the Help Center is your one-stop space for answers, guidance, and support.
            <br /><br />
            From shopping tips and delivery details to vendor information and account management, we’ve organized everything to help you get the support you need—quickly and easily. If you can’t find what you’re looking for, our support team is just a message away.
            <br /><br />
            Let’s grow something beautiful together.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Help;
