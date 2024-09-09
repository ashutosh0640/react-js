import React from 'react'
import { FaPlus } from "react-icons/fa";

const InputComp = () => {
    return (
        <div>
            <div>
                <form action="" className='bg-red-400 lg:w-1/3 sm:w-2/3 border-2 border-blue-300 shadow-xl shadow-blue-200 flex flex-row justify-stretch'>
                    <input
                        type="text"
                        id="todo"
                        placeholder="Add new todo"
                        
                        className=' px-4 w-full font-bold focus:outline-none' />
                    <button type='submit' className=' bg-blue-100'><FaPlus className=' size-10 text-blue-500'/></button>
                </form>
            </div>

        </div>
    )
}

export default InputComp
