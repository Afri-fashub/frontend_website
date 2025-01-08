import React from 'react'

const MaleHubCard = ({maleHubItem}) => {
  return (
    <>
        <section className='bg-[#80808026]'>
            <section className='grid justify-center items-center'>
                <section className='grid justify-center items-center '>
                    <div className=''>
                        <img src="/src/assets/images/malehub/malehub8.png" className='object-cover w-[300px]'  alt="" />
                    </div>
                </section>
            </section>
            <div className='flex justify-end p-3'>
                <p className='bg-[#00BD7E] w-[4rem] text-center rounded-full'>Buy</p>
            </div>
        </section>
        <section className='grid gap-2 mt-4'>
            <section className='grid grid-cols-2'>
                <p>Outfit Name</p>
                <p className='justify-self-end'>{maleHubItem?.outfitName}</p>
            </section>
            <section className='grid grid-cols-2 gap-10 '>
                <p>Outfit Price</p>
                <p className='justify-self-end'>{maleHubItem?.outfitPrice}</p>
            </section>
            <section className='grid grid-cols-2 gap-10 '>
                <p>Designer Name </p>
                <p className='justify-self-end'>{maleHubItem?.designerName}</p>
            </section>
        </section>
    </>
  )
}

export default MaleHubCard