import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='flex justify-end p-7 bg-transparent'>
      <ul className='list-none flex flex-row justify-center gap-12 text-white font-bold'>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/vendor-store">Vendor Store</Link>
        </li>

        <li>
          <Link to="/help">Help</Link>
        </li>

        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>

        <li>
          <Link to="/sign-in">Signin</Link>
        </li>

        <li>
          <Link to="/cart">
            <IoMdCart size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
