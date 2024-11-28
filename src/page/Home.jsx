import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import WhoAreWe from '../component/homeComponents/WhoAreWe'
import NewArrival from '../component/homeComponents/NewArrival'

const Home = () => {
  return (
    <>
      <section className='relative h-screen w-screen'>
        <section className='homeSection h-full w-full absolute z-20'>
          <section className='h-full w-full bg-black opacity-[0.5] absolute z-10'>
          </section>
          <section className='flex items-center justify-center absolute inset-0 h-1/2 w-1/2 m-auto text-white text-center z-10'>
            <div className='flex flex-col gap-6'>
              <h1 className='text-6xl font-bold'>AFRI FASHUB</h1>
              <div>
                <Link to='/shop' className='inline-flex border px-6 py-2 font-bold'>Shop Now</Link>
              </div>
            </div>
          </section>
        </section>
      </section>
      <WhoAreWe />
      <NewArrival />
    </>
  )
}

export default Home