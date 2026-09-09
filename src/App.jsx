import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import MeatNSeaFood from './components/Meat&SeaFood/MeatNSeaFood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'
import Values from './components/Values/Values'
import Process from './components/Process/Process'
import Footer from './components/Footer/Footer'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/fruits',
          element: <Fruits />
        },
        {
          path: '/dairy',
          element: <Dairy />
        },
        {
          path: '/meatNseafood',
          element: <MeatNSeaFood />
        },
        {
          path: '/allproducts',
          element: <AllProducts />
        }
      ]
    },
    {
      path: '/aboutus',
      element: <Values />
    },
    {
      path: '/process',
      element: <Process />
    },
    {
      path: 'contactus',
      element: <Footer />
    }

  ])


  return <RouterProvider router={router} />
}

export default App
