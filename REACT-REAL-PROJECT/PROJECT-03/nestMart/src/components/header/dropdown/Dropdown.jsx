import React, { useState } from 'react'
import './Dropdown.css'

const Dropdown = (props) => {
    const {setCategory} = props;
    const list = ['All Categories','Milks and Dairies', 'Wines & Alcohol', 'Clothing & Beauty', 'Pet Foods & Toy', 'Fast food', 'Baking material', 'Vegetables', 'Fresh Seafood', 'Noodles & Rice', 'Ice cream']
    const [activeItem, setActiveItem] = useState(null);


    const handleListClick = (item) => {
        setActiveItem(item);
        setCategory(item);
    }

    return (
        <div className=' absolute w-50 h-48'  >
            <div className=' px-1 pt-2 w-50 h-48 shadow-lg relative  -left-3 top-3 rounded-md border border-t-0 z-10 bg-white'>
                <div>
                    <input type="text" className=' pl-2 w-full h-10 border-2 border-[#ddf1e8] focus:outline-none' />
                    <div class="max-h-32 overflow-y-auto scroll- mt-2">
                        <ul class=" header-ul list-none p-4 text-sm text-slate-600 font-medium">
                            
                            {
                                list.map((item, index) => {
                                    return (
                                        <li onClick={()=>handleListClick(item)} key={index} className={ ` py-2 hover:bg-slate-300 ${index === 0 ? 'bg-slate-200' : ''} ${activeItem === item ? 'bg-[#49b885]' : ''}`}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dropdown
