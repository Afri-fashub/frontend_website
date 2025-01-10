import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet, useLoaderData } from 'react-router-dom'

const RootLayout = () => {
  const data = useLoaderData();
  return (
    <>
      <Header />
      <main>
        <Outlet context={data}/>
      </main>
      <Footer />
    </>
  )
}

export default RootLayout