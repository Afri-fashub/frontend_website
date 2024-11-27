import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout