import React from 'react'
import assets from '../../assets/assets'

const InvestMoney = () => {
  return (
    <section className='bg-[#F3BC80] text-white py-10 px-6 mt-[5rem]'>
        <section className='flex justify-center max-custom-msm:grid'>
            <div className='max-w-[400px] flex'>
                <img src={assets.invest_money} className='w-full' alt="" />
            </div>
            <div className='w-[600px] grid items-center justify-center max-custom-msm:w-full' >
                <div className='max-w-[400px]'>
                    <h2 className='text-3xl font-bold'>Invest In <br className='max-custom-msm:hidden'/>
                        Money & Time
                    </h2>
                    <p className='mt-3 text-base font-medium'>Save up automatically from your bank or
                        you can save manually to catch up with
                        the services you want to get from us
                    </p>
                    <div>
                        <a href="#" className='inline-grid rounded-full bg-black px-8 py-2 mt-3 border-none'>Save Now</a>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default InvestMoney