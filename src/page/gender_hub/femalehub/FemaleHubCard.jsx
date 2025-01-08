import React from 'react'

const FemaleHubCard = ({femaleHubItem}) => {
    return (
        <>
            <section className='bg-[#80808026]'>
                <section className='grid justify-center items-center'>
                    <section className='grid justify-center items-center '>
                        <div className=''>
                            <img src={femaleHubItem.image} className='object-fit w-[300px] h-[300px]'  alt="" />
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
                    <p className='justify-self-end'>{femaleHubItem?.outfitName}</p>
                </section>
                <section className='grid grid-cols-2 gap-10 '>
                    <p>Outfit Price</p>
                    <p className='justify-self-end'>{femaleHubItem?.outfitPrice}</p>
                </section>
                <section className='grid grid-cols-2 gap-10 '>
                    <p>Designer Name </p>
                    <p className='justify-self-end'>{femaleHubItem?.designerName}</p>
                </section>
            </section>
        </>
      )
}

export default FemaleHubCard