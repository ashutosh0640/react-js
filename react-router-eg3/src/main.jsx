import ReactDOM, { createRoot } from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Root from "./routes/Root.jsx";




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
