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
    <footer className='relative mt-10 px-6'>
      <nav className='grid grid-cols-[.8fr_2.2fr] justify-around max-w-[1280px] my-0 mx-auto relative max-custom-md:grid-cols-1'>
        <div className='grid place-items-center'>
          <h1 className='text-3xl font-semibold'>AFRI FASHUB</h1>
        </div>

        <section className='grid grid-cols-4 max-custom-md:mt-10 max-custom-ssm:flex max-custom-ssm:flex-wrap max-custom-ssm:justify-between max-custom-ssm:gap-10 max-custom-ssssm:justify-between max-custom-ssssm:grid-cols-2'>
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

          <section className='justify-self-center max-custom-sssm:w-[77px]'>
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

          <section className='justify-self-end max-custom-md:justify-self-center'>
            <h2 className='text-xl font-normal'>Shopping</h2>
            <ul className='grid gap-3 mt-3'>
              <li><a href="">Your cart</a></li>
              <li><a href="">Track My Orders</a></li>
              <li><a href="">Wishlist</a></li>
              <li><a href="">New Arrival </a></li>
              <li><a href="">Top Seller</a></li>
            </ul>
          </section>
        </section>
      </nav>
    </footer>
  )
}

export default Footer