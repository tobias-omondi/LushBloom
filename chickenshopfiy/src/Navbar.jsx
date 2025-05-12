import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import './App.css';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen (! menuOpen)
  };

  return (
    <nav className='flex justify-end p-7 bg-transparent '>
      {/* for desktop */}
      <ul className='hidden list-none md:flex md:flex-row justify-end gap-12 text-white font-bold'>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/vendor-store">Vendor Store</Link></li>
        <li> <Link to="/help">Help</Link> </li>
        <li> <Link to="/contact-us">Contact Us</Link> </li>
        <li> <Link to="/sign-in">Signin</Link></li>
        <li> <Link to="/cart"> <IoMdCart size={20} /> </Link>
        </li>
      </ul>
      {/* Mobile menu icon */}

      <div className='flex md:hidden justify-end'>
        <button onClick = {toggleMenu} className='text-white'>
          <CiMenuFries size={25} />
        </button>
      </div>
      {/* mobile dropdown menu */}

      {menuOpen && (
        <ul className='flex flex-col gap-6 w-screen text-white bg-black  mt-4 p-4 rounded md-hidden'>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/vendor-store" onClick={toggleMenu}>Vendor Store</Link></li>
          <li><Link to="/help" onClick={toggleMenu}>Help</Link></li>
          <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
          <li><Link to="/sign-in" onClick={toggleMenu}>Signin</Link></li>
          <li><Link to="/cart" onClick={toggleMenu}><IoMdCart size={20} /></Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
