import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Router, Route } from 'react-router-dom' 
import App from './App.jsx'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import AndroidApp from './components/AdroridApp.jsx'

import './index.css'




const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'app',
        element: <AndroidApp />
      },

    ]

  }
  
])


createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
 
)

