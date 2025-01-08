import React from 'react'
import MaleHubCardList from './MaleHubCardList'

const MaleHub = () => {
    
  return (
    <section className=' max-w-[1280px] mx-auto my-0'>
        <h1 className='text-3xl font-semibold mt-[3rem]'>Male Hub</h1>
        <section className='grid grid-cols-3 gap-10 mt-[5rem]'>
          <MaleHubCardList />
        </section>
    </section>
  )
}

export default MaleHub