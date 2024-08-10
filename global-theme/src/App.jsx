import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Outlet } from 'react-router-dom'


import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />

    </>
  )
}

export default App
