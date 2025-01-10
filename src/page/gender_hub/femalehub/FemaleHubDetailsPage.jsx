import React from 'react'
import { useParams } from 'react-router-dom'
import { TbCurrencyNaira } from "react-icons/tb";

const FemaleHubDetailsPage = () => {
  const {id} = useParams();
  
      const {data: productDetail} = fetch(`http://localhost:7000/malehub/${id}`);
  
      
    return (
      <section className='max-w-[1280px] mt-[3rem] mx-auto p-6'>
            <section className='flex gap-10 w-full h-full'>
              <div className="">
                <img src="https://placehold.co/400x687/black/png" className='h-full' alt="" />
              </div>
              <div className="grid gap-[2rem]">
                <div className="grid gap-[2rem] px-2 ">
                  <div className='grid gap-2'>
                    {/* {console.log(productDetail)} */}
                    <p>{productDetail?.title}</p>
                    <p>Designer Name</p>
                    <p className='flex place-items-center'>
                      <span><TbCurrencyNaira className='text-xl text-[#00BD7E]'/></span>
                      37, 200 NGN
                    </p>
                  </div>
                  <p className='max-w-[45ch]'>
                    Meet your new Lerato African Crop Top has all the classic crop top details in a more African Style for any kind of events. <br />
                    This comes in different sizes, special sizes can also be made based on order
                  </p>
                </div>
                <div className="flex gap-[1rem]">
                  <div className="grid gap-[1rem]">
                    <div className=""><img src="https://placehold.co/200x200/FF5733/png" alt="" /></div>
                    <div className=""><img src="https://placehold.co/200x200/33C1FF/png" alt="" /></div>
                  </div>
                  <div className="grid gap-[1rem]">
                    <div className=""><img src="https://placehold.co/200x200/FFC300/png" alt="" /></div>
                    <div className=""><img src="https://placehold.co/200x200/28A745/png" alt="" /></div>
                  </div>
                </div>
              </div>
            </section>
            <div className='text-center mt-[2rem]'>
              <button className='w-[200px] h-[30px] bg-black text-white rounded-full text-base'>Add To Cart</button>
            </div>
            <section className='grid gap-[2rem] text-center mt-[3rem]'>
              <p>Other Designs From This Designer’s Desk</p>
              <section className='flex justify-center gap-8'>
                <div className="rounded-full"><img src="https://placehold.co/150x150/4A90E2/png" className="rounded-full" alt="" /></div>
                <div className="rounded-full"><img src="https://placehold.co/150x150/F5A623/png" className="rounded-full" alt="" /></div>
                <div className="rounded-full"><img src="https://placehold.co/150x150/50E3C2/png" className="rounded-full" alt="" /></div>
                <div className="rounded-full"><img src="https://placehold.co/150x150/9013FE/png" className="rounded-full" alt="" /></div>
              </section>
            </section>
          </section>
    )
}

export default FemaleHubDetailsPage