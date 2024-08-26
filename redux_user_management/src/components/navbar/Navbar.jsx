import React from 'react'
import { AiFillApple } from "react-icons/ai";


const Navbar = ({ NavbarMenuOptions, currentRoute, setCurrentRoute }) => {


    return (
        <nav className={`navbar px-5 h-fit flex border justify-between items-center`}>
            <span className={`logo w-20 h-20 flex justify-center items-center`}>
                <AiFillApple className=' w-20 h-20'/>
            </span>
            <ul className={`navItems w-3/5 flex justify-between items-center text-2xl font-bold`}>
                {NavbarMenuOptions.map((item, index) => (
                    <li
                        className={` hover:cursor-pointer`}
                        key={index}
                        onClick={() => setCurrentRoute(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <button className={`actions px-4 shadow-lg rounded-lg bg-blue-400 hover:bg-blue-600 text-rose-50 w-28 h-10`}>Logout</button>
        </nav>
    );

}

export default Navbar;
