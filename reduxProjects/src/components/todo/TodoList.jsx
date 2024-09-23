import React from 'react'
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

const TodoList = ({ todo, handleTodoUpdate, handleTodoDelete }) => {
    const id = todo.id;
    const text = todo.text;
    function handleTodoDelete() {
        console.log("Item deleted");
    }
    function handleTodoUpdate() {
        console.log("Item updated");
    }

    return (
        <div className='px-3 py-1 border-2 border-red-500 flex justify-between items-center'>
            <h2>{text}</h2>

            <div className=' flex gap-2'> 
                <Button
                    onClick={ handleTodoUpdate }
                    variant="contained"
                    sx={{backgroundColor:'green'}}
                >
                    Edit
                </Button>

                <Button
                    onClick={ handleTodoDelete }
                    variant="contained"
                    sx={{backgroundColor:'red'}}
                >
                    Delete
                </Button>

            </div>



        </div>
    )
}

export default TodoList;
