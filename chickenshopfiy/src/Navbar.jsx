import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdCart } from "react-icons/io";


const Navbar = () => {
  return (
      <div className=' bg-amber-800 opacity-75 rounded-2xl p-3 w-5xl mx-auto relative '>
        <nav className='text-white flex  justify-end'>
          <ul className='list-none flex flex-row justify-center gap-12'>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/vendor-store">Vender Store</Link>
            </li>

            <li>
              <Link to="/help">Help</Link>
            </li>

            <li>
              <Link to="/contact-us">ContactUs</Link>
            </li>

            <li>
              <Link to="/Sign-in">Signin</Link>
            </li>

            <li>
              <Link to="/cart"><IoMdCart size={20}/></Link>
            </li>
            
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
