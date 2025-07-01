import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import './App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('nav')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full transition-all duration-300 z-50 ${scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand can be added here */}
        {/* <Link to="/" className="text-white text-xl font-bold">YourLogo</Link> */}

        {/* Desktop Navigation */}
        <ul className='hidden list-none md:flex md:flex-row justify-end gap-8 bg-black w-full rounded-2xl text-white font-medium items-center p-2 shadow'>
          <li><Link to="/" className='hover:text-gray-300 transition-colors py-2 px-1'>Home</Link></li>
          <li><Link to="/vendor-store" className='hover:text-gray-300 transition-colors py-2 px-1'>Vendor Store</Link></li>
          <li><Link to="/help" className='hover:text-gray-300 transition-colors py-2 px-1'>Help</Link></li>
          <li><Link to="/contact-us" className='hover:text-gray-300 transition-colors py-2 px-1'>Contact Us</Link></li>
          <li><Link to="/sign-in" className='hover:text-gray-300 transition-colors py-2 px-1'>Signin</Link></li>
          <li>
            <Link to="/cart" className='hover:text-gray-300 transition-colors flex items-center py-2 px-1'>
              <IoMdCart size={20} />
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='flex md:hidden z-50'>
          <button 
            onClick={toggleMenu} 
            className='text-blue-800 focus:outline-none transition-transform hover:scale-110'
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IoMdClose size={25} /> : <CiMenuFries size={25} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`
          md:hidden fixed top-0 right-0 w-3/4 h-full bg-black bg-opacity-95 
          flex flex-col items-center justify-center
          transition-all duration-300 ease-in-out transform
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          z-40
          pt-16
        `}>
          <ul className='
            flex flex-col gap-6 text-center 
            text-white text-xl font-light w-full
          '>
            <li><Link to="/" onClick={toggleMenu} className='hover:text-gray-300 transition-colors block py-3'>Home</Link></li>
            <li><Link to="/vendor-store" onClick={toggleMenu} className='hover:text-gray-300 transition-colors block py-3'>Vendor Store</Link></li>
            <li><Link to="/help" onClick={toggleMenu} className='hover:text-gray-300 transition-colors block py-3'>Help</Link></li>
            <li><Link to="/contact-us" onClick={toggleMenu} className='hover:text-gray-300 transition-colors block py-3'>Contact Us</Link></li>
            <li><Link to="/sign-in" onClick={toggleMenu} className='hover:text-gray-300 transition-colors block py-3'>Signin</Link></li>
            <li>
              <Link to="/cart" onClick={toggleMenu} className='hover:text-blue-300 transition-colors flex justify-center items-center py-3'>
                <IoMdCart size={24} className="mr-2" />
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;