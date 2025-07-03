import React from 'react';
import Navbar from '../../Navbar';
import '../../App.css';
import Footer from '../Footer';

const Signin = () => {
  return (
    <>
      {/* Navbar - Fixed at top */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90">
        <Navbar />
      </header>

      {/* Signin Form Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-24 pb-16">
        <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
          <h1 className="text-4xl font-semibold text-center mb-2">
            LUSH B<span className="text-blue-700 font-bold">loo</span>m
          </h1>
          <p className="text-center text-gray-600 mb-6">WELCOME BACK!</p>

          <form className="space-y-4">
            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signin;
