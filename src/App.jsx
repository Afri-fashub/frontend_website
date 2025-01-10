import React from 'react'
import './App.css'

// React Router Dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Layouts
import RootLayout from './layout/RootLayout'

// Pages
import Home from './page/Home'
import About from './page/about_us/About'
import Collections from './page/Collections'
import Female from './page/Female'
import Login from './page/Login'
import Male from './page/Male'
import Shop from './page/Shop'
import HelpCenter from './page/help/HelpCenter'
import Privacy from './page/privacy/Privacy'
import R_e_policy from './page/r_e_policy/R_e_policy'
import Fit_guide from './page/fit_guide/Fit_guide'

// import Signup from './page/Signup'
import ProductContextProvider from './context/ProductContext'
import LoginSIgnupContextProvider from './context/LoginSIgnupContext'
import SignedInUserContextProvider from './context/SignedInUserContext'
import LoginSignup from './page/LoginSignup'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='collections' element={<Collections />} />
        <Route path='female' element={<Female />} />
        <Route path='male' element={<Male />} />
        <Route path='shop' element={<Shop />} />
        <Route path='help' element={<HelpCenter />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='r_e_policy' element={<R_e_policy />} />
        <Route path='fit_guide' element={<Fit_guide />} />
      </Route>
      <Route path='login' element={<LoginSignup />} />
      <Route path='signup' element={<LoginSignup />} />
    </>
  )
)
const App = () => {
  return (
    <SignedInUserContextProvider>
      <ProductContextProvider>
        <LoginSIgnupContextProvider>
          <RouterProvider router={router}/>
        </LoginSIgnupContextProvider>
      </ProductContextProvider>
    </SignedInUserContextProvider>
  )
}

export default App