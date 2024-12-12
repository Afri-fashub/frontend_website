import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import WhoAreWe from '../component/homeComponents/WhoAreWe'
import NewArrival from '../component/homeComponents/NewArrival'
import MeetDesigner from '../component/homeComponents/MeetDesigner'
import TestCarousel from '../component/homeComponents/TestCarousel'
import NewDesign from '../component/homeComponents/NewDesign'
import products from '../products.js'
import InvestMoney from '../component/homeComponents/InvestMoney.jsx'
import CustomerReview from '../component/homeComponents/CustomerReviews.jsx'
import Suscribe from '../component/homeComponents/Suscribe.jsx'
import Login from './Login.jsx'

const Home = () => {
  const text = "What Our Designers Have To Say";
  return (
    <>
      {/* <section className='relative h-screen w-screen'>
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
      <NewArrival data={products} />
      <MeetDesigner />
      <NewDesign />
      <NewArrival data={products.slice(0, 4)} text={'Top Selling'}/>
      <InvestMoney />
      <CustomerReview />
      <CustomerReview text={text} />
      <Suscribe /> */}
      <Login />
    </>
  )
}

export default Home