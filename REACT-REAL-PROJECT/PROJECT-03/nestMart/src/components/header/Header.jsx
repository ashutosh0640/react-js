import React,{ useState } from 'react'
import './Header.css'
import Dropdown from './dropdown/Dropdown';
import Wishlist from './wishtlist/Wishlist';
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);
    const [category, setCategory] = useState('All Categories');

    return (
        <>
            <header className=' px-5 py-10 flex justify-between items-center'>

                {/** Logo section start */}
                <img src="..\src\assets\header\logo.svg" alt="Logo" className=' w-[130px] h-[55px]' />
                {/** Logo section end */}

                {/** Search section start */}
                <div className=' border-2 border-[#ddf1e8] rounded-md pl-2 w-[660px] h-[54px] flex items-center justify-between'>
                    <div className=' w-3/12 hover:cursor-pointer' onClick={() => {setIsSelectorOpen(!isSelectorOpen)}}>
                        <p className=' text-sm font-bold'>{category} </p>
                        {/* <IoIosArrowDown /> */}
                        {
                            isSelectorOpen ? <Dropdown setCategory={setCategory} /> : null
                        }
                    </div>

                    {/**Header search bar start */}
                    <div className=' custom-border w-9/12 flex items-center '>
                        <span className=' h-5 w-0 border'></span>
                        <input type="text" placeholder="Search for items..." className=' w-full pl-4 pr-1 py-2 focus:outline-none z-10' />
                        <div className=' relative right-0 pr-1 flex items-center pointer-events-none'>
                            <IoIosSearch className=' text-2xl' />
                        </div>
                    </div>
                </div>
                {/** Search section end */}

                {/** Cart section start */}
                <div className=' w-[360px] h-[54px]'>
                    <Wishlist/>
                </div>
                {/** Search section end */}

                

            </header>
            

        </>
    )
}

export default Header
