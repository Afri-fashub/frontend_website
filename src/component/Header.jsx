import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import assets from '../assets/assets'
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoIosCart } from "react-icons/io";
import { AiFillCloseSquare } from "react-icons/ai";
import './Header.css'
import { LoginSignupContext } from '../context/LoginSIgnupContext';

const Header = () => {
  const [display, setDisplay] = useState(false);
  const {page, setPage} = useContext(LoginSignupContext)
  
  return (
    <header className='bg-[#E87A00] text-white p-6 relative'>
      {console.log(page)}
      <nav className={`flex place-items-center justify-around max-w-[1280px] my-0 mx-auto xl:justify-between max-custom-md:justify-between ${display ? 'max-custom-md:hidden' : 'max-custom-md:flex'}`}>
        <Link to='/'>
          <img src={assets.afriHubLogo} width={'85px'} alt="" />
        </Link>

        <ul className='navbar flex place-items-center gap-7 max-custom-sm:hidden'>
          <li>
            <NavLink to='/'>Home</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/>  
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

        <ul className='flex place-items-center gap-7 max-custom-sm:hidden'>
          <li>
            <NavLink className='' to="/login">Log in</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/>
          </li>
          <li><NavLink className='' to="/signup">Sign Up</NavLink>
            <hr className='w-2/4 mx-auto hidden border-orange-200 border-[1px]'/>
          </li>
        </ul>
        <GiHamburgerMenu onClick={() => setDisplay(!display)} className='hidden max-custom-sm:flex text-2xl cursor-pointer'/>
      </nav>

      <div className={`sidebar hidden ${display ? "max-custom-md:flex" : 'max-custom-md:hidden'} absolute z-50 bg-[#E87A00] text-white w-screen h-screen top-0 left-0 bottom-0 p-8`}>
        <nav className='w-full'>
          <AiFillCloseSquare onClick={() => setDisplay(!display)} className='text-2xl cursor-pointer'/>
          <ul className='grid gap-4 mt-4 '>
            <li><NavLink onClick={() => setDisplay(!display)} className={'block text-lg'} to='/'>Home</NavLink></li>
            <li><NavLink onClick={() => setDisplay(!display)} className={'block text-lg '} to='/shop'>Shop</NavLink></li>
            <li><NavLink onClick={() => setDisplay(!display)} className={'block text-lg '} to='/about'>About Us</NavLink></li>
            <li><NavLink onClick={() => setDisplay(!display)} className={'block text-lg '} to='/collections'>Collection</NavLink></li>
            <li><NavLink onClick={() => setDisplay(!display)} className={'block text-lg '} to='/male'>Male</NavLink></li>
            <li><NavLink onClick={() => setDisplay(!display)} className={'block text-lg '} to='/female'>Female</NavLink></li>
            <li>
              <NavLink onClick={() => {
                  setDisplay(!display)
                  setPage('Login')
                }} 
                className={'block text-lg '} to='/login'>
                  Log in
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => {
                  setDisplay(!display)
                  setPage('Sign Up')
                }} 
                className={'block text-lg '} to='/login'>
                  Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header