import React from 'react'
import assets from '../../assets/assets'

const WhoAreWe = () => {
  return (
    <section className='grid grid-cols-[1fr_.2fr_1fr] gap-4 max-w-[1280px] mx-auto my-0 px-6 py-20 max-custom-ssm:flex max-custom-ssm:flex-col max-custom-ssm:gap-10'>
        <section className='flex flex-col gap-6 justify-center'>
            <h2 className='text-3xl font-semibold'>Who Are We?</h2>
            <p>
                Afri Fashion Hub is embarking on a transformative journey 
                to elevate African fashion and  promote its rich 
                cultural heritage on a global scale. To achieve 
                this vision, we are developing a  state-of-the-art 
                website and mobile application that will serve as 
                the central platform for our  initiatives. 
                These digital platforms will be the cornerstone 
                of our efforts to empower African  designers, 
                enhance customer experiences, streamline logistics, 
                and foster global connectivity  within the fashion industry.
            </p>
        </section>

        <section className='col-start-3 '>
            <div className='flex gap-10'>
                <img src={assets.waw_female} width={'100%'}  alt="" />
                <img src={assets.waw_male} width={'100%'} alt="" />
            </div>
        </section>
    </section>
  )
}

export default WhoAreWe