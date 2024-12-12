import React, { useContext, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { LoginSignupContext } from '../context/LoginSIgnupContext';

const Login = () => {
  const {page} = useContext(LoginSignupContext);

  return (
    <section className='p-6 max-w-[1280px] mt-[2rem] mx-auto'>
      <section>
        <h2 className='text-3xl font-semibold'>{page}</h2>
        <section className='mt-[2.5rem]'>
          <div className='flex'>
            <p className='w-1/2 text-base'>Registerd Users</p>
            <p className={`w-1/2 text-base ${page === 'Sign Up' && 'hidden'}`}>New Users</p>
          </div>
          <hr className='border-[#000000] mt-[.4rem]'/>
        </section>
        <form className='mt-[2rem]'>
          <section className='flex'>
            <div className='w-1/2'>
              <div className={`${page === 'Login' && 'hidden'}`}>
                <label htmlFor="fName">First Name</label><br />
                <input type="text" name='fName' className='border w-[17.233rem] h-[2rem]' id='fName' />
              </div><br className={`${page === 'Login' && 'hidden'}`}/>
              <div className={`${page === 'Login' && 'hidden'}`}>
                <label htmlFor="lName">Surname</label><br />
                <input type="text" name='lName' className='border w-[17.233rem] h-[2rem]' id='lName' />
              </div><br className={`${page === 'Login' && 'hidden'}`}/>
              <div>
                <label htmlFor="email">Email</label><br />
                <input type="email" name='email' className='border w-[17.233rem] h-[2rem]' id='email' />
              </div><br />
              <div className={`${page === 'Login' && 'hidden'}`}>
                <label htmlFor="pNumber">Phone Number</label><br />
                <input type="tel" name='pNumber' className='border w-[17.233rem] h-[2rem]' id='pNumber'/>
              </div><br className={`${page === 'Login' && 'hidden'}`}/>
              <div>
                <label htmlFor="password">Password</label><br />
                <input type="password" name='password' className='border w-[17.233rem] h-[2rem]' id='password'/>
              </div><br />
              <div className={`${page === 'Login' && 'hidden'}`}>
                <label htmlFor="cPass">Confirm Password</label><br />
                <input type="email" name='cPass' className='border w-[17.233rem] h-[2rem]' id='cPass'/>
              </div><br className={`${page === 'Login' && 'hidden'}`}/>
              <div className='w-[17.233rem] flex justify-center'>
                <label htmlFor="rememberMe" className='flex gap-3'>
                  <input type="checkbox" name='rememberMe' id='rememberMe' className='scale-150'/>
                  Remember Me
                </label>
              </div><br />
              <div className={`${page === 'Sign Up' && 'hidden'}`}>
                <a href="#" className='underline'>I forgot my password</a>
              </div><br className={`${page === 'Sign Up' && 'hidden'}`}/>
            </div>

            <div className={`w-1/2 flex flex-col gap-5 ${page === 'Sign Up' && 'hidden'}`}>
              <p>Create an account with us to enjoy mant <br /> benefits(track orders and more)</p>
              <button className='bg-black w-[200px] text-white py-1'>Create An Account</button>
            </div>
          </section>
          <div className={`flex gap-10 ${page === 'Sign Up' && 'hidden'}`}>
            <button type='submit' className='w-[17.223rem] h-[2rem] bg-black text-white'>{page === 'Login' ? 'Sign In' : page}</button>
            <p className='flex place-items-center gap-5'>
              OR SIGN UP WITH
              <span className='flex gap-5'>
                <FcGoogle />
                <FaApple />
              </span>
            </p>
          </div>
        </form>
        <div className='flex justify-around mt-[2rem] py-[1rem] bg-[#E87A000F]'>
          <p className='flex place-items-center'>
            Sign up for Newsletter and be the first to know about new updates
          </p>
          <form>
            <div className='flex w-[25rem] h-[3rem] border'>
              <input type="email" name="suscribeMail" placeholder='E-Mail Address' className='w-2/3 bg-[#E87A000F] px-3 outline-none text-[#808080] border border-[black]'/>
              <button type='submit' className='w-1/3 bg-black text-white outline-none border-none'>Sign Up</button>
            </div>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Login