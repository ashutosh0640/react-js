import React, {useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'

import ThemeButton from './ThemeButton'
import { ThemeContext } from '../context/ThemeContext'






const Navbar = () => {
    // const {theme, setTheme, themes} = useContext(ThemeContext);


  return (
    <header className=' '>
        <nav className={` navbar w-full h-14 px-5 flex justify-between items-center shadow-lg`}>
            <div><NavLink  to='/'><h1>LoGo</h1></NavLink></div>
            <div className=" w-3/5 px-5 flex justify-between items-center gap-2">
                <NavLink to='/' className={({isActive})=> ` ${isActive?' text-orange-600':''}`}>Home</NavLink>
                <NavLink to='/about' className={({isActive}) => ` ${isActive?" text-orange-600":""}`}>About</NavLink>
                <NavLink to='/contact' className={({isActive}) => ` ${isActive?" text-orange-600":""}`}>Contact</NavLink>
                <NavLink to='/app' className={({isActive}) => ` ${isActive?" text-orange-600":""}`}>Android App</NavLink>
            </div>
            <div className=' border'>
                <button>Login</button>
                <ThemeButton />
                
            </div>
        </nav>
      
    </header>
  )
}

export default Navbar
