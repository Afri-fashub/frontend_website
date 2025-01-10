import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import WhoAreWe from '../../component/homeComponents/WhoAreWe.jsx'
import NewArrival from '../../component/homeComponents/NewArrival.jsx'
import MeetDesigner from '../../component/homeComponents/MeetDesigner.jsx'
import NewDesign from '../../component/homeComponents/NewDesign.jsx'
import InvestMoney from '../../component/homeComponents/InvestMoney.jsx'
import CustomerReview from '../../component/homeComponents/CustomerReviews.jsx'
import Suscribe from '../../component/homeComponents/Suscribe.jsx'
import useFetchData from '../../hooks/useFetchData.jsx'

const Home = () => {
  const {data: myproducts, loading, error} = useFetchData('http://localhost:7000/products');
  const text = "What Our Designers Have To Say";

  return (
    <>
      <section className='relative md:h-80 lg:h-screen h-screen w-screen'>
        <section className='homeSection h-full w-full absolute z-20'>
          <section className='h-full w-full bg-black opacity-[0.5] absolute z-10'>
          </section>
          <section className='flex items-center justify-center absolute inset-0 h-1/2 w-1/2 m-auto text-white text-center z-10'>
            <div className='flex flex-col gap-6'>
              <h1 className='text-6xl font-bold'>Afri Fashub</h1>
              <div>
                <Link to='/shop' className='inline-flex border px-6 py-2 font-bold'>Shop Now</Link>
              </div>
            </div>
          </section>
        </section>
      </section>
      <WhoAreWe />
      {console.log(myproducts)}
      {myproducts && <NewArrival data={myproducts} />}
      <MeetDesigner />
      <NewDesign />
      {loading && <h1>Loading...</h1>}
      {myproducts && <NewArrival data={myproducts.slice(0, 4)} text={'Top Selling'} />}
      <InvestMoney />
      <CustomerReview />
      <CustomerReview text={text} />
      <Suscribe />
    </>
  )
}

export default Home