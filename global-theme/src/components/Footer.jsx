import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" bg-blue-500">
    <div >
      <div className=' bg-red-500'></div>
      <div className=' bg-red-500'></div>
      <div className=' bg-red-500'></div>
      <div className=' bg-red-500'></div>
    </div>
    
    <ul className=' flex flex-col justify-center items-center'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/service'>Contact</Link>
      <Link to='/app'>Android App</Link>
    </ul>
    <p className=' text-center'>&copy;2021 Global Theme | All Rights Reserved</p>
  </footer>
  )
}

export default Footer;
