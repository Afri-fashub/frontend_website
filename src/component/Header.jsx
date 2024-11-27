import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import assets from '../assets/assets'
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoIosCart } from "react-icons/io";
import './Header.css'

const Header = () => {
  return (
    <header className='bg-[#E87A00] text-white'>
      <nav className='flex place-items-center justify-around max-w-[1280px] my-0 mx-auto xl:justify-between'>
        <Link to='/'>
          <img src={assets.logo} width={'120px'} alt="" />
        </Link>

        <ul className='flex place-items-center gap-7'>
          <li>
            <NavLink to='/'>Home</NavLink>
            <hr className='w-1/4 mx-auto hidden border-orange-200 border-[1px]'/>  
          </li>
          <li>
            <NavLink className='' to='/shop'>Shop</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/> 
          </li>
          <li>
            <NavLink className='' to='/about'>About Us</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/>
          </li>
          <li>
            <NavLink className='' to='/collections'>Collections</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/>
          </li>
          <li>
            <NavLink className='' to='/male'>Male</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/>
          </li>
          <li>
            <NavLink className='' to='/female'>Female</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/>
          </li>
          <li className='grid items-center'>
            <FiSearch className='text-[18px]'/>
          </li>
          <li className='grid items-center'>
            <IoIosCart className='text-[18px]'/>
          </li>
        </ul>

        <ul className='flex place-items-center gap-7'>
          <li>
            <NavLink className='' to="/login">Log in</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/>
          </li>
          <li><NavLink className='' to="/signup">Sign Up</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/>
          </li>
        </ul>
        <GiHamburgerMenu className='sm:hidden'/>
      </nav>
    </header>
  )
}

export default Header