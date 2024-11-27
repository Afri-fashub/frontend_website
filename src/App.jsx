import React from 'react'
import './App.css'

// React Router Dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Layouts
import RootLayout from './layout/RootLayout'

// Pages
import Home from './page/Home'
import About from './page/About'
import Collections from './page/Collections'
import Female from './page/Female'
import Login from './page/Login'
import Male from './page/Male'
import Shop from './page/Shop'
import Signup from './page/Signup'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='collections' element={<Collections />} />
        <Route path='female' element={<Female />} />
        <Route path='login' element={<Login />} />
        <Route path='male' element={<Male />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </>
  )
)
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App