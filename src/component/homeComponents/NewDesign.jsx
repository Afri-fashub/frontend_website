import React from 'react'
import './NewDesign.css'
import assets from '../../assets/assets'
import { Link } from 'react-router-dom'

const NewDesign = () => {
  return (
    <section className='relative h-full mt-[5rem]'>
        <section className='bgImage text-white '>
            <section className=' px-6 py-[5rem] max-w-[1280px] mx-auto'>
                <h2 className='text-5xl font-bold'>New Design </h2>
                <p className='mt-4'>
                    Check today to discover our newly added designs <br/>
                    to our collection. Stop by to pick a choice of 
                    yours <br/> with our amazing designers today.
                </p>
            </section>
            {/* <section></section> */}
        </section>

        <section className='bg-[#D7D5D2] flex justify-center max-custom-msm:grid max-custom-msm:gap-10 gap-20 sm:gap-20 md:gap-32 lg:gap-40 mt-2 p-10 relative'>
            <Link to='male'>
                <section className='max-custom-msm:w-[300px] max-custom-sm:w-[200px] w-[300px] relative h-40 grid'>
                    <div className='absolute z-0 h-full w-full'>
                        <img src={assets.nd2} className='w-full h-full object-cover'  alt="" />
                    </div>
                    <div className='abosolute z-10 grid justify-center items-center'>
                        <p className='bg-white p-1'>Male Hub</p>
                    </div>
                </section>
            </Link>
            <Link to={'female'}>
                <section className='max-custom-msm:w-[300px] max-custom-sm:w-[200px] w-[300px] relative h-40 grid'>
                    <div className='absolute z-0 h-full w-full'>
                        <img src={assets.nd3} className='w-full h-full object-cover'  alt="" />
                    </div>
                    <div className='abosolute z-10 grid justify-center items-center'>
                        <p className='bg-white p-1'>Female Hub</p>
                    </div>
                </section>
            </Link>
        </section>
    </section>
  )
}

export default NewDesign