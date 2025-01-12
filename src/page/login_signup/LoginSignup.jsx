import React, { useContext, useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import assets from '../../assets/assets';
import { SignedInUserContext } from '../../context/SignedInUserContext';
import useFetchData from '../../hooks/useFetchData';


const LoginSignup = () => {
    const [formData, setFormData] = useState({firstname: '', lastname: '', email: '', phoneNumber: '',  password: '', cPass: '',});
    const {setSignedInUser} = useContext(SignedInUserContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    const phoneRegex = /^[0-9]{10}$/;
    

    // Call the useEffcet function anytime location.pathname changes
    useEffect(() => {
        resetFormData();
        console.log("UseEffect()");
    }, [location.pathname]);

    const {data: users, loading, error} = useFetchData('http://localhost:7000/users');

    const resetFormData = () => {
        if (location.pathname === '/login' || location.pathname === '/signup') {
            setFormData({firstname: '', lastname: '', email: '', phoneNumber: '',  password: '', cPass: '',})
        }
    }

    const loginLogic = () => {
        // if input fields are empty
        if (!formData.email || !formData.password) {
            alert("Please fill out both email and password");
            return;
        }

        // Check for valid email format
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Check if user input fields matches the users database
        const user = users.find(user => user.email === formData.email && user.password === formData.password); 
        if (user) {
            setSignedInUser(user);
            console.log("Sign in successful");
            // Redirect user after successful sign in, for example:
            navigate('/');
        } else {
            alert("Invalid email or password");
        }
    }

    const SignUpLogic = async () => {
        // If inputs are empty notify the user they need to fill out the fields
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.phoneNumber || !formData.password || !formData.cPass) {
            alert("Please fill out all fields");
            return;
        }

        // Check for valid email format
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // check for valid password format
        if (!passwordRegex.test(formData.password)) {
            alert('Password should be at least 6 characters including an uppercase, lowercase, number and special character')
            return
        }

        // Check if passwords match
        if (formData.password !== formData.cPass) {
            alert("Passwords do not match");
            return;
        }

        // check for valid phone number
        if (!phoneRegex.test(formData.phoneNumber)) {
            alert("Please enter a valid phone number");
            return;
        }

        // Check if user already exists
        const userExists = users.some(user => user.email === formData.email);
        if (userExists) {
            alert("User already exist");l
            return;
        } 

        // Here, you'd likely send a request to your backend to create the new user
        try {
            const response = await fetch('http://localhost:7000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Signup Succesful")
                // Redirect to login page after successful sign-up
                navigate('/login');
            } else {
                const error = await response.json();
                alert(error.error);
            }
        } catch (err) {
            console.error("error signing up:", err);
            alert('Something went wrong. Please try again later.');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Login Submit Logic
        if (location.pathname === '/login') {
            loginLogic();
        }

        // Signup Submit Logic
        if (location.pathname === '/signup') {
            SignUpLogic();
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <section className='flex h-screen'>
            {console.log("Render()")};
            <section className='w-1/2 bg-[#eff0f4] flex justify-center h-full'>
                <div className='relative h-full w-full grid justify-center items-center'>
                    <img src={assets.afriHubLogo} className='absolute z-20 w-[130px] h-[auto] object-cover top-8 left-10' alt="" />
                    <img src={assets.signup_girl} className='absolute z-10 w-full h-full object-contain' alt="" />
                    {console.log(users)}
                </div>
            </section>

            <section className='w-1/2 h-full flex flex-col justify-center gap-10 p-10'>
                <h2 className='text-3xl font-bold'>{location.pathname === '/login' ? 'Sign In!' : 'Sign Up!'}</h2>
                <div className=''>
                    {location.pathname === '/login'
                        // Login page
                        ? (
                            <>
                                <form className="grid gap-8" onSubmit={handleSubmit}>
                                    <div className='grid'>
                                        <label className='text-xs text-[#00000080]' htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='border border-x-0 border-t-0 border-b-2 w-[60%] outline-none h-[2rem]'
                                        /> 
                                    </div>
                                    <div className='grid'>
                                        <label className='text-xs text-[#00000080]' htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id='password'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className='border border-x-0 border-t-0 border-b-2 w-[60%] outline-none h-[2rem]'
                                        /> 
                                        <span className='flex justify-between items-center w-[60%] mt-3'>
                                            <label htmlFor=""className='flex gap-2 text-xs'>
                                                <input type="checkbox" />
                                                Remember me
                                            </label>
                                            <Link to='forgetpassword' className='text-xs text-[#00000080]'>Forget password?</Link>
                                        </span>
                                    </div>

                                    <button type="submit" className='w-[60%] bg-[#E87A00] text-white h-[3rem] rounded-lg font-bold'>
                                        Sign In
                                    </button>
                                </form>
                                <Link to='/signup' className='flex text-sm mt-3 gap-2'>Don't have an account? <span className='text-sm text-[#E87A00] font-bold'>Sign up</span></Link>
                            </>
                        ) :
                        // Signup page
                        (
                            <>
                                <form className="grid gap-8" onSubmit={handleSubmit} > 
                                    <div className='grid'>
                                        <label className='text-xs text-[#00000080]' htmlFor="firstname">Firstname</label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            id='firstname'
                                            value={formData.firstname}
                                            onChange={handleChange}
                                            required
                                            className='border border-x-0 border-t-0 border-b-2 w-[60%] outline-none h-[2rem]'
                                        />
                                    </div>
                                    <div className='grid'>
                                        <label className='text-xs text-[#00000080]' htmlFor="lastname">Surname</label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            id='lastname'
                                            value={formData.lastname}
                                            onChange={handleChange}
                                            required
                                            className='border border-x-0 border-t-0 border-b-2 w-[60%] outline-none h-[2rem]'
                                        />
                                    </div>
                                    <div className='grid'>
                                        <label className='text-xs text-[#00000080]' htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='border border-x-0 border-t-0 border-b-2 w-[60%] outline-none h-[2rem]'
                                        />
                                    </div>
                                    <div className='grid'>
                                        <label className='text-xs text-[#00000080]' htmlFor="phoneNumber">Phone number</label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            id='phoneNumber'
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className='border border-x-0 border-t-0 border-b-2 w-[60%] outline-none h-[2rem]'
                                        />
                                    </div>
                                    <div className='grid'>
                                        <label className='text-xs text-[#00000080]' htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id='password'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className='border border-x-0 border-t-0 border-b-2 w-[60%] outline-none h-[2rem]'
                                        />
                                    </div>

                                    <div className='grid'>
                                        <label className='text-xs text-[#00000080]' htmlFor="cPass">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="cPass"
                                            id='cPass'
                                            value={formData.cPass}
                                            onChange={handleChange}
                                            required
                                            className='border border-x-0 border-t-0 border-b-2 w-[60%] outline-none h-[2rem]'
                                        />
                                    </div>

                                    <button type="submit" className='w-[60%] bg-[#E87A00] text-white h-[3rem] rounded-lg font-bold'>
                                        Sign Up
                                    </button>
                                </form>
                                <p className={`flex place-items-center gap-5 mt-4 text-xs`}>
                                    OR SIGN UP
                                    <span className='flex gap-5'>
                                        <FcGoogle />
                                        <FaApple />
                                    </span>
                                </p>
                            </>
                        )
                    }
                </div>
            </section>
        </section>
    )
}

export default LoginSignup