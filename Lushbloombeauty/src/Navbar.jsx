import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import './App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='flex justify-end p-7 bg-transparent relative'>
      {/* Desktop Navigation */}
      <ul className='hidden list-none md:flex md:flex-row justify-end gap-12 text-white font-bold'>
        <li><Link to="/" className='hover:text-gray-300 transition-colors'>Home</Link></li>
        <li><Link to="/vendor-store" className='hover:text-gray-300 transition-colors'>Vendor Store</Link></li>
        <li><Link to="/help" className='hover:text-gray-300 transition-colors'>Help</Link></li>
        <li><Link to="/contact-us" className='hover:text-gray-300 transition-colors'>Contact Us</Link></li>
        <li><Link to="/sign-in" className='hover:text-gray-300 transition-colors'>Signin</Link></li>
        <li>
          <Link to="/cart" className='hover:text-gray-300 transition-colors'>
            <IoMdCart size={20} />
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className='flex md:hidden justify-end z-50'>
        <button 
          onClick={toggleMenu} 
          className='text-white focus:outline-none transition-transform hover:scale-110'
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <IoMdClose size={25} /> : <CiMenuFries size={25} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <div className={`
        md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-90 
        flex items-center justify-center
        transition-all duration-500 ease-in-out
        ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        z-40
      `}>
        <ul className='
          flex flex-col gap-5 text-center 
          text-white text-xl font-light
          animate-fadeIn
        '>
          <li><Link to="/" onClick={toggleMenu} className='hover:text-gray-300 transition-colors'>Home</Link></li>
          <li><Link to="/vendor-store" onClick={toggleMenu} className='hover:text-gray-300 transition-colors'>Vendor Store</Link></li>
          <li><Link to="/help" onClick={toggleMenu} className='hover:text-gray-300 transition-colors'>Help</Link></li>
          <li><Link to="/contact-us" onClick={toggleMenu} className='hover:text-gray-300 transition-colors'>Contact Us</Link></li>
          <li><Link to="/sign-in" onClick={toggleMenu} className='hover:text-gray-300 transition-colors'>Signin</Link></li>
          <li>
            <Link to="/cart" onClick={toggleMenu} className='hover:text-gray-300 transition-colors flex justify-center'>
              <IoMdCart size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;