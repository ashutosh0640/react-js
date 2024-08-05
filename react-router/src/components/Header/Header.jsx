import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>
                    <Link to="/" className='' >
                        <img src="logo.png" className=' ' alt="Logo"/>
                    </Link>
                    <div>
                        <Link to="#" className=''>Login</Link>
                        <Link to="#" className=''>Get started</Link>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/" className={({isActive}) => ` ${isActive}?'text-red-600':'' `}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({isActive}) => ` ${isActive}?' text-red-500':'' ` }>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({isActive}) => ` ${isActive}?' text-red-500':'' `}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/github" className={({isActive}) => ` ${isActive}? ' text-red-500':'' ` }>Github</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    
    
    )
}

export default Header;