import React  from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className=' w-ful shadow-xl border'>

        <nav className=' h-24 flex justify-between items-center px-5' >

            <div>
                <Link to="/" className=' text-6xl font-bold flex '><h1 className=' text-orange-500'>Logo</h1><h1 className=' text-gray-500'>Here</h1></Link>
            </div>

            <div className=' w-1/2 px-5 py-2 text-gray-600 text-2xl font-bold flex justify-between items-center'>
                <NavLink to='/' className={({isActive})=>` ${isActive?' text-orange-500 underline':''}`}>Home</NavLink>
                <NavLink to='/about' className={({isActive})=>` ${isActive?' text-orange-500 underline':''}`}>About</NavLink>
                <NavLink to='/contact' className={({isActive})=>` ${isActive?' text-orange-500 underline':''}`}>Contact</NavLink>
                <NavLink to='/github' className={({isActive})=>` ${isActive?' text-orange-500 underline':''}`}>Github</NavLink>
            </div>

            <div className=' w-1/6 px-5 py-2 text-2xl font-bold flex justify-between '>
                <button className=' px-5 py-2 border-orange-500 bg-orange-500 border-2 text-gray-600 rounded-3xl hover:bg-white hover:text-orange-500 '>Login</button>
                <button className=' px-5 py-2 border-orange-500 bg-orange-500 border-2 text-gray-600 rounded-3xl hover:bg-white hover:text-orange-500 '>Get started</button>
            </div>

        </nav>
      
    </header>
  )
}

export default Header;


