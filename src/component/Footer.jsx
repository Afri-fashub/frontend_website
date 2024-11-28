import React from 'react'
import { Link } from 'react-router-dom'
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { ImPinterest2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className=''>
      <nav className='grid grid-cols-5 justify-around max-w-[1250px] my-0 mx-auto xl:justify-between max-custom-md:justify-between'>
        <div className='grid items-center'>
          <h1 className='text-3xl font-semibold'>AFRI FASHUB</h1>
        </div>

        <section className='justify-self-center'>
          <h2 className='text-xl font-normal'>Links</h2>
          <ul className='grid gap-3 mt-3'>
            <li><a href="">How to apply</a></li>
            <li><a href="">Buy now</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Help center</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </section>

        <section className='justify-self-center'>
          <h2 className='text-xl font-normal'>Account</h2>
          <ul className='grid gap-3 mt-3'>
            <li><a href="">Login</a></li>
            <li><a href="">Register</a></li>
            <li><a href="">Checkout</a></li>
          </ul>
        </section>

        <section className='justify-self-center'>
          <h2 className='text-xl font-normal'>Contact Us</h2>
          <ul className='grid gap-3 mt-3'>
            <li >
              <a href="" className='flex gap-2'>
                <span className='flex items-center'><CiMail className='text-[20px]'/></span>
                afrihub.com
              </a>
            </li>
            <li>
              <a href="" className='flex gap-2'>
                <span className='flex items-center'><MdLocalPhone /></span>
                +234 0078 345 0087
              </a>
            </li>
            <li className='flex gap-4'>
              <span className='flex items-center'><FaXTwitter className='text-[20px]'/></span>
              <span className='flex items-center'><FaFacebookF className='text-[20px]'/></span>
              <span className='flex items-center'><TiSocialGooglePlus className='text-[20px]'/></span>
              <span className='flex items-center'><ImPinterest2 className='text-[20px]'/></span>
            </li>
          </ul>
        </section>

        <section className='justify-self-end'>
          <h2 className='text-xl font-normal'>Shopping</h2>
          <ul className='grid gap-3 mt-3'>
            <li><a href="">Your cart</a></li>
            <li><a href="">Track My Orders</a></li>
            <li><a href="">Wishlist</a></li>
            <li><a href="">New Arrival </a></li>
            <li><a href="">Top Seller</a></li>
          </ul>
        </section>
      </nav>
    </footer>
  )
}

export default Footer