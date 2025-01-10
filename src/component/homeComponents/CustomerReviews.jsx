import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

const CustomerReview = ({text}) => {

    const items = [
        {
          heading: "Peter Okoye",
          paragraph: "Joined this platform 2020 and since then has been one of the designers with the most sales and highly rated designs as reviewed by our customers."
        },
        {
          heading: "Jane Smith",
          paragraph: "Joined this platform 2020 and since then has been one of the designers with the most sales and highly rated designs as reviewed by our customers."
        },
        {
          heading: "John Doe",
          paragraph: "Joined this platform 2020 and since then has been one of the designers with the most sales and highly rated designs as reviewed by our customers."
        },
        {
          heading: "Emily Johnson",
          paragraph: "Joined this platform 2020 and since then has been one of the designers with the most sales and highly rated designs as reviewed by our customers."
        }
      ];
      
  return (
    <section className={` text-[#000000] w-[1280px] mx-auto mt-[5rem] mb-[3rem] relative`}>
        <h2 className='text-3xl font-[700]'>{text ? text : "Our Happy Customer"}</h2>
        <section className="flex gap-[1rem] max-custom-md:grid">
            {items.map((item, index) => {
                return (
                    <article key={item.heading} className="pb-5 shadow-[0_50px_100px_0px_#00000025] bg-[#fbfbfb] mt-[2rem]">
                        <div className='px-[3rem] bg-[#fbfbfb]'>
                            <h3 className='text-base font-semibold'>{item.heading}</h3>
                            <p className='text-sm pt-2'>{item.paragraph}</p>
                        </div>
                        <div className='flex pl-[3rem] text-green-500 mt-3 gap-1 '>
                            <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
                        </div>
                    </article>
                )
            })}
        </section>
    </section>
  )
}

export default CustomerReview