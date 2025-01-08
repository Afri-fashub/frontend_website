import React from 'react'
import assets from '../../assets/assets'
import { IoMdMail } from "react-icons/io";
import '../homeComponents/Suscribe.css'

const Suscribe = () => {
  return (
    <section className='flex bg-[#FFBB201C] relative px-6 py-10 mt-5 customClass'>
        <section className='flex justify-between relative w-full max-w-[1280px] mx-auto my-0 max-custom-ssm:block'>
            <div className='w-3/5 max-custom-ssm:w-full relative'>
                <img src={assets.suscribe_img} className='img_now' width={''} alt="" />
            </div>
            <section className='flex justify-center w-2/5 h-full absolute right-20 max-custom-ssm:relative max-custom-ssm:w-full max-custom-ssm:inset-0  max-custom-ssm:mt-10'>
                <div className='flex justify-center items-center max-custom-ssm:items-start'>
                    <div className=' bg-[#FFBB201C] opacity-[0.5] border-none absolute z-0 max-custom-ssm:relative'>
                        <div className='flex flex-col items-center justify-center gap-10 w-[500px] h-[350px] max-custom-lg:w-[400px] max-custom-lg:h-[280px] max-custom-sssm:w-[300px] py-10 shadow-2xl'>
                            <div className=''>
                                <h3 className='text-2xl font-bold'>Suscribe To Our Mail</h3>
                            </div>
                            <form className='grid gap-10 justify-center'>
                                <span className='flex items-center justify-center bg-white w-[250px] px-2'>
                                    <IoMdMail className='text-[18px]'/>
                                    <input type="email" className='p-2 w-full focus-within:outline-none' placeholder='Your Email'/>
                                </span>
                                <span className='flex justify-center'>
                                    <input type="submit" className='w-[10rem] text-center py-2 bg-white' value='Suscribe'/>
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