import React from 'react'
import './App.css'

// React Router Dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Layouts
import RootLayout from './layout/RootLayout'

// Pages
import About from './page/about_us/About'
import HelpCenter from './page/help/HelpCenter'
import Privacy from './page/privacy/Privacy'
import R_e_policy from './page/r_e_policy/R_e_policy'
import Fit_guide from './page/fit_guide/Fit_guide'

// import Signup from './page/Signup'
import SignedInUserContextProvider from './context/SignedInUserContext'
import LoginSignup from './page/LoginSignup'

import Home from './page/home/Home'
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
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='collections' element={<Collections />} />
        <Route path='shop' element={<Shop />} />
        <Route path='help' element={<HelpCenter />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='r_e_policy' element={<R_e_policy />} />
        <Route path='fit_guide' element={<Fit_guide />} />
        <Route path='female' element={<GenderHub text={'Female'} />} />
        <Route path='female/:id' element={<FemaleHubDetailsPage text={'Female'} />} />
        <Route path='male' element={<GenderHub text={'Male'}/>} />
        <Route path='male/:id' element={<MaleHubDeatailsPage />} />
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