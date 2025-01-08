import React from 'react'
import './App.css'

// React Router Dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Layouts
import RootLayout from './layout/RootLayout'

// Pages
import Home from './page/home/Home'
import About from './page/about_us/About'
import Collections from './page/collections/Collections'
import LoginSignup from './page/login_signup/LoginSignup'
import Shop from './page/shop/Shop'
import NewArrivalProductDetails from './component/homeComponents/NewArrivalProductDetails'
import GenderHub from './page/gender_hub/GenderHub'

// import Signup from './page/Signup'
import SignedInUserContextProvider from './context/SignedInUserContext'
import MaleHubDeatailsPage from './page/gender_hub/malehub/MaleHubDeatailsPage'
import FemaleHubDetailsPage from './page/gender_hub/femalehub/FemaleHubDetailsPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path='/' element={<RootLayout />} loader={dataLoader} > */}
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='collections' element={<Collections />} />
        <Route path='female' element={<GenderHub text={'Female'} />} />
        <Route path='female/:id' element={<FemaleHubDetailsPage text={'Female'} />} />
        <Route path='male' element={<GenderHub text={'Male'}/>} />
        <Route path='male/:id' element={<MaleHubDeatailsPage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='products/:id' element={< NewArrivalProductDetails/>} />
      </Route>
      <Route path='login' element={<LoginSignup />} />
      <Route path='signup' element={<LoginSignup />} />
    </>
  )
)

const App = () => {
  return (
    <SignedInUserContextProvider>
          <RouterProvider router={router}/>
    </SignedInUserContextProvider>
  )
}

export default App