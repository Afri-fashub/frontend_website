import React from 'react'
import { CiStar } from "react-icons/ci";

const NewArrival = ({data, text}) => {

    const allProducts = data.map((product, index) => {
        return (
            <section key={index} className='grid gap-4'>
                <div>
                    <img src={product.img} width={'100%'} alt="" />
                    <p className='font-bold text-base mt-4'>{product.title}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-bold text-base'>{product.price}</p>
                    <ul className='flex'>
                        <li><CiStar className='text-xl' /></li>
                        <li><CiStar className='text-xl' /></li>
                        <li><CiStar className='text-xl' /></li>
                        <li><CiStar className='text-xl' /></li>
                        <li><CiStar className='text-xl' /></li>
                    </ul>
                </div>

            </section>
        )
    })
      
  return (
    <section className='grid gap-6 px-6 max-w-[1280px] mt-[5rem] mb-[0] mx-auto'>
        <h2 className='text-3xl font-semibold'>{text ? text : 'New Arrivals'}</h2>
        <section className='grid grid-cols-4 justify-between gap-10 max-custom-md:grid-cols-3 max-custom-ssm:grid-cols-2 max-custom-sssm:grid-cols-1'>
            {allProducts}
        </section>

    </section>
  )
}

export default NewArrival