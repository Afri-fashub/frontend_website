import React from 'react'
import './NewDesign.css'
import assets from '../../assets/assets'

const NewDesign = () => {
  return (
    <section className='relative h-full'>
        <section className='bgImage text-white mt-20'>
            <section className='max-w-[500px] pl-[3rem] py-[5rem]'>
                <h2 className='text-5xl font-bold'>New Design </h2>
                <p className='mt-4'>
                    Check today to discover our newly added designs <br/>
                    to our collection. Stop by to pick a choice of 
                    yours <br/> with our amazing designers today.
                </p>
            </section>
            {/* <section></section> */}
        </section>

        <section className='bg-[#D7D5D2] flex justify-center gap-40 mt-2 p-10 relative'>
            <section className='w-[200px] relative h-40 grid'>
                <div className='absolute z-0 h-full'>
                    <img src={assets.nd2} className='w-full h-full object-cover'  alt="" />
                </div>
                <div className='abosolute z-10 grid justify-center items-center'>
                    <p className='bg-white p-1'>Male Hub</p>
                </div>
            </section>

            <section className='w-[200px] relative h-40 grid'>
                <div className='absolute z-0 h-full'>
                    <img src={assets.nd3} className='w-full h-full object-cover'  alt="" />
                </div>
                <div className='abosolute z-10 grid justify-center items-center'>
                    <p className='bg-white p-1'>Female Hub</p>
                </div>
            </section>
        </section>
    </section>
  )
}

export default NewDesign