import React from 'react'
import FemaleHubCardList from './FemaleHubCardList'

const FemaleHub = () => {
  return (
    <section className=' max-w-[1280px] mx-auto my-0 px-4'>
        <h1 className='text-3xl font-semibold mt-[3rem]'>Female Hub</h1>
        <section className='grid grid-cols-1 gap-10 mt-[5rem]'>
          <FemaleHubCardList />
        </section>
    </section>
  )
}

export default FemaleHub