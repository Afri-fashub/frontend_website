import React from 'react'
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { ImPinterest2 } from "react-icons/im";
import { Link } from 'react-router-dom';

const Footer = () => {
  const gradientColor = {
    background: "linear-gradient(90deg, #E87A00 0%, #FFFFFF 127.42%)",
    paddingTop: ".5px"
  };

  return (
    <footer className='mt-8 px-6 py-10'>
      <div className="p-1" style={gradientColor}></div>
      <nav className='myCustomNav grid grid-cols-[.7fr_2.2fr] justify-around max-w-[1280px] my-0 mx-auto relative max-custom-md:grid-cols-1 mt-10'>
        <div className='grid place-items-center'>
          <h1 className='text-4xl font-semibold'>AFRI FASHUB</h1>
        </div>

        <section className='grid grid-cols-4 max-custom-md:mt-10 max-custom-ssm:flex max-custom-ssm:flex-wrap max-custom-ssm:justify-between max-custom-ssm:gap-10 max-custom-ssssm:justify-between max-custom-ssssm:grid-cols-2'>
          <section className='justify-self-center'>
            <h2 className='text-xl font-normal'>Links</h2>
            <ul className='grid gap-3 mt-3'>
              <li><Link to="">How to apply</Link></li>
              <li><Link to="">Buy now</Link></li>
              <li><Link to="">Testimonials</Link></li>
              <li><Link to="/Help">Help center</Link></li>
              <li><Link to="">Contact</Link></li>
              <li><Link to="/privacy">Privacy policy</Link></li>
              <li><Link to="/r_e_policy">Return And <br /> Exchange policy</Link></li>
              <li><Link to="/fit_guide">Fit Guide</Link></li>
            </ul>
          </section>

          <section className='justify-self-center max-custom-sssm:w-[77px]'>
            <h2 className='text-xl font-normal'>Account</h2>
            <ul className='grid gap-3 mt-3'>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Register</Link></li>
              <li><Link to="">Checkout</Link></li>
            </ul>
          </section>

          <section className='justify-self-center'>
            <h2 className='text-xl font-normal'>Contact Us</h2>
            <ul className='grid gap-3 mt-3'>
              <li >
                <Link to="" className='flex gap-2'>
                  <span className='flex items-center'><CiMail className='text-[20px]'/></span>
                  afrihub.com
                </Link>
              </li>
              <li>
                <Link to="" className='flex gap-2'>
                  <span className='flex items-center'><MdLocalPhone /></span>
                  +234 0078 345 0087
                </Link>
              </li>
              <li className='flex gap-4'>
                <span className='flex items-center'><FaXTwitter className='text-[20px]'/></span>
                <span className='flex items-center'><FaFacebookF className='text-[20px]'/></span>
                <span className='flex items-center'><TiSocialGooglePlus className='text-[20px]'/></span>
                <span className='flex items-center'><ImPinterest2 className='text-[20px]'/></span>
              </li>
            </ul>
          </section>

          <section className='justify-self-center max-custom-md:justify-self-center'>
            <h2 className='text-xl font-normal'>Shopping</h2>
            <ul className='grid gap-3 mt-3'>
              <li><Link to="">Your cart</Link></li>
              <li><Link to="">Track My Orders</Link></li>
              <li><Link to="">Wishlist</Link></li>
              <li><Link to="">New Arrival </Link></li>
              <li><Link to="">Top Seller</Link></li>
            </ul>
          </section>
        </section>
      </nav>
    </footer>
  )
}

export default Footer