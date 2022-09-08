import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import logoImage from '../pics/logo.jpg';


const Navbar = () => {
  return (
  <>
    <section className="relative z-10">
        <nav className="fixed w-[100%] bg-white font-poppins">
            <img src={logoImage}  className="w-48 inline-block m-2 mx-8 mt-6 mb-10"/>

            <ul className="mb-1 mt-14 mr-24 sm:font-helvetica float-right text-black text-[17px] sm:inline-block hidden">
                <NavLink className="inline-block mx-4 hover:text-blue-800 border-blue-800 cursor-pointer" to="/"> Home </NavLink>
                <NavLink className="inline-block mx-4 hover:text-blue-800 border-blue-800 cursor-pointer" to="/about"> About </NavLink>
                <NavLink className="inline-block mx-4 hover:text-blue-800 border-blue-800 cursor-pointer" to="/contact"> Contact </NavLink>      
            </ul>
            <Menu className=''>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        </nav>
        <div className="h-[140px] bg-white"></div>
        <div className="bg-blue-800 text-center font-poppins p-3">
            <NavLink to="/contact" className='text-white font-bold italic p-1 text-[18px] font-poppins'>* SEND YOUR CV TO US NOW FOR CONSULTATION *</NavLink>
        </div>
    </section>
    </>
    
  )
}

export default Navbar