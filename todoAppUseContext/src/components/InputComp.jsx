import React, { useState, useContext } from 'react'
import { TiPlus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { TodoContext } from '../context/TodoContext';

const InputComp = () => {

    const [id, setId] = useState(0);
    const [todo, setTodo] = useState("");
    const { todoList, setTodoList } = useContext(TodoContext)

    const todoObj = {
        id: id,
        text: todo,
        editable: false
    }
    
    function handleTodo(e) {
        e.preventDefault();
        setTodo(e.target.value);
        setId((id) => id += 1);
        setTodoList([todoObj, ...todoList]);
        setTodo("");
    }


    const handleEdit = (id, text, obj) => {
        setTodoList(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, text, editable: !todo.editable } : todo
            )
        );
    };

    const handleTextChange = () => {


    }

    function handleDelete(id) {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    }

    return (

        <div className=' my-5 flex flex-col justify-center items-center'>
            <form action="" onSubmit={handleTodo} className='bg-red-400 lg:w-1/3 sm:w-2/3 border-2 border-blue-300 shadow-xl shadow-blue-200 flex flex-row justify-stretch'>
                <input
                    type="text"
                    id="todo"
                    placeholder="Add new todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className=' px-4 w-full font-bold focus:outline-none' />
                <button type='submit' className=' bg-blue-100'><TiPlus className=' size-10 text-blue-500' /></button>
            </form>
            <div className='  mt-10 w-3/5 h-8 lg:w-2/5'>

                {todoList.map((todoObj) => (
                    <div key={todoObj.id} className=" mb-1 px-1 w-full h-full border-2 border-green-200 flex justify-between items-center">
                        <input type="checkbox" />
                        <input
                            type="text"
                            readOnly={!todoObj.editable}
                            value={todoObj.text}
                            onChange={() => handleTextChange(todoObj)}
                            className=' mx-2 w-full focus:outline-none' />

                        <button onClick={() => handleEdit(todoObj.id, todoObj.text, todoObj)} className=' h-full mx-2 text-green-600 border '>
                            {(todoObj.editable) ? (
                                <TiTick className=' size-full' />
                            ) : (
                                <FaEdit className=' size-full' />
                            )};
                        </button>

                        {/* <input
                            type="text"
                            readOnly={!todoObj.editable} // Make input editable when in edit mode
                            value={todoObj.text}
                            onChange={handleTextChange}
                            className='mx-2 w-full focus:outline-none'
                        />

                        
                        <button onClick={handleEditToggle} className='h-full mx-2 text-green-600 border'>
                            {todoObj.editable ? (
                                <TiTick className='size-full' />  // Show tick icon when in edit mode
                            ) : (
                                <FaEdit className='size-full' />  // Show edit icon when not in edit mode
                            )}
                        </button> */}
                        <button onClick={() => handleDelete(todoObj.id)} className=' h-full mx-2 text-red-600'><MdDelete className=' size-full' /></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InputComp
