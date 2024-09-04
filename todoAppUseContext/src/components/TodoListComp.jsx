import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoListComp = () => {
    return (
        <div className='  h-8 flex justify-stretch items-center'>
            <div className=' w-fit border-2 border-green-200 flex items-center'>
                <input
                    type="text"
                    placeholder='Write todo here...'
                    className=' px-2 focus:outline-none' />
                <button className=' ml-2 h-full'><FaEdit className=' size-full text-green-700' /></button>
                <button className=' ml-2 h-full'><MdDeleteForever className=' size-full text-red-700' /></button>

            </div>

        </div>
    )
}

export default TodoListComp
