import React from 'react'
import { CiStar } from "react-icons/ci";
import image from '../../assets/images/image.png'

const NewArrivalCard = ({product}) => {
  return (
        <section className='grid gap-4'>
            <div>
                <img src={image} width={'100%'} alt="" />
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
}

export default NewArrivalCard