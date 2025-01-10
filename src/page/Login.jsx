import React, { useContext, useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { LoginSignupContext } from '../context/LoginSIgnupContext';
import { useLocation, useNavigate } from 'react-router-dom';

export const dummyUsers = [
  {
    firstName: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+234-8023456789",
    password: "P@ssw0rd123"
  },
  {
    firstName: "Jane",
    surname: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+234-8034567890",
    password: "S3cur3P@ssw0rd"
  },
  {
    firstName: "Michael",
    surname: "Johnson",
    email: "michael.johnson@example.com",
    phoneNumber: "+234-8045678901",
    password: "M!ch@el2024"
  }
];


const Login = () => {
  const {page, setPage} = useContext(LoginSignupContext);
  const [formData, setFormData] = useState({fName: '', lName: '', email: '', pNumber: '',  password: '', cPass: '',});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/signup') {
      setPage('Sign Up');

    } else if (location.pathname === '/login') {
      setPage('Login');
    }
    handleReset();
  }, [location.pathname, setPage]);

  const handleReset = () => {
    setFormData({
      fName: '',
      lName: '',
      email: '',
      pNumber: '',
      password: '',
      cPass: '',
    });
  };

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLogin = (e) => {
  
    // Check if the user exists in dummy data
    const userExists = dummyUsers.some(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
  
    if (userExists) {
      alert("Login successful!");
      navigate('/')
    } else {
      alert("Invalid email or password");
    }
  };

  const handleSignup = (e) => {
  
    // Check if email already exists
    const emailExists = dummyUsers.some((user) => user.email === formData.email);
  
    if (emailExists) {
      alert("Email is already registered.");
    } else {
      // Add new user to dummy data
      dummyUsers.push({ email: formData.email, password: formData.password });
      alert("Signup successful!");
    }
  };
  

  const handleOnSubmit = (e) => {
    e.preventDefault();
    page === 'Login' ? handleLogin() : handleSignup
    // handleReset();
  }

  return (
    <section className='p-6 max-w-[1280px] mt-[2rem] mx-auto'>
      {console.log(formData)}
      <section>
        <h2 className='text-3xl font-semibold'>{page}</h2>
        <section className='mt-[2.5rem]'>
          <div className='flex'>
            <p className='w-1/2 text-base'>Registerd Users</p>
            <p className={`w-1/2 text-base ${page === 'Sign Up' && 'hidden'}`}>New Users</p>
          </div>
          <hr className='border-[#000000] mt-[.4rem]'/>
        </section>
        <form onSubmit={handleOnSubmit} className='mt-[2rem]'>
          <section className='flex'>
            <div className='w-1/2'>
              <div className={`${page === 'Login' && 'hidden'}`}>
                <label htmlFor="fName">First Name</label><br />
                <input onChange={handleOnChange} value={formData.fName} type="text" name='fName' className='border w-[17.233rem] h-[2rem]' id='fName' required />
              </div><br className={`${page === 'Login' && 'hidden'}`}/>
              <div className={`${page === 'Login' && 'hidden'}`}>
                <label htmlFor="lName">Surname</label><br />
                <input type="text" name='lName' onChange={handleOnChange} value={formData.lName} className='border w-[17.233rem] h-[2rem]' id='lName' required/>
              </div><br className={`${page === 'Login' && 'hidden'}`}/>
              <div>
                <label htmlFor="email">Email</label><br />
                <input type="email" name='email' onChange={handleOnChange} value={formData.email} className='border w-[17.233rem] h-[2rem]' id='email' required/>
              </div><br />
              <div className={`${page === 'Login' && 'hidden'}`}>
                <label htmlFor="pNumber">Phone Number</label><br />
                <input type="tel" name='pNumber' onChange={handleOnChange} value={formData.pNumber} className='border w-[17.233rem] h-[2rem]' id='pNumber' required/>
              </div><br className={`${page === 'Login' && 'hidden'}`}/>
              <div>
                <label htmlFor="password">Password</label><br />
                <input type="password" name='password' onChange={handleOnChange} value={formData.password} className='border w-[17.233rem] h-[2rem]' id='password' required/>
              </div><br />
              <div className={`${page === 'Login' && 'hidden'}`}>
                <label htmlFor="cPass">Confirm Password</label><br />
                <input type="password" name='cPass' onChange={handleOnChange} value={formData.cPass} className='border w-[17.233rem] h-[2rem]' id='cPass' required/>
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
          <div className={`flex gap-10`}>
            <button type='submit' className='w-[17.223rem] h-[2rem] bg-black text-white'>{page === 'Login' ? 'Sign In' : page}</button>
            <p className={`flex place-items-center gap-5 ${page === 'Sign Up' && 'hidden'}`}>
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