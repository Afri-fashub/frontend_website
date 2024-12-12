import React from 'react'
import assets from '../../assets/assets'
import { IoMdMail } from "react-icons/io";
import '../homeComponents/Suscribe.css'

const Suscribe = () => {
  return (
    <section className='flex bg-[#FFBB201C] relative p-10 mt-5 customClass'>
        <section className='flex justify-between relative w-full max-w-[1280px] mx-auto my-0 max-custom-ssm:block'>
            <div className='w-[60%] max-custom-ssm:w-full relative'>
                <img src={assets.suscribe_img} className='img_now' width={''} alt="" />
            </div>
            <section className='flex justify-center w-[40%] h-full absolute right-20 max-custom-ssm:relative max-custom-ssm:w-full max-custom-ssm:inset-0 max-custom-ssm:h-auto max-custom-ssm:mt-10'>
                <div className='flex justify-center items-center max-custom-ssm:items-start'>
                    <div className=' bg-[#FFBB201C] opacity-[0.5] border-none absolute z-0 max-custom-ssm:relative'>
                        <div className='flex flex-col items-center justify-center gap-10 border w-[350px] h-[300px] py-10 '>
                            <div className=''>
                                <h3 className='text-2xl font-bold'>Suscribe To Our Mail</h3>
                            </div>
                            <form className='grid gap-10 justify-center'>
                                <span className='flex items-center justify-center bg-white w-[250px] px-2'>
                                    <IoMdMail className='text-[18px]'/>
                                    <input type="email" className='p-2 w-full focus-within:outline-none' placeholder='Your Email'/>
                                </span>
                                <span className='flex justify-center'       >
                                    <input type="submit" className='w-[8rem] text-center py-2' value='Submit'/>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </section>
  )
}

export default Suscribe