import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, updateTodo, toggleEditMod } from '/src/redux/todo/todoSlice.js';


const InputTodo = () => {

    const [todo, setTodo] = useState('');
    const [editedTodo, setEditedTodo] = useState('');
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todos);


    function handleAddTodo() {
        dispatch(addTodo(todo));
        setTodo('');
    }

    function handleTodoUpdate(id, text) {
        dispatch(updateTodo({ id, text }));
        dispatch(toggleEditMod(id));
        setEditedTodo('');

    }

    function handleTodoDelete(id) {
        dispatch(removeTodo(id));

    }

    function handleTodoToggle(id, text) {
        dispatch(toggleTodo(id, text));
    }

    function handleTodoEditMode(id) {
        dispatch(toggleEditMod(id));
    }



    return (
        <>
            <div className=' border-2 border-green-500'>

                <div className=' w-fit m-auto flex border-2 justify-center items-center'>

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '45ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            onChange={(e) => setTodo(e.target.value)}
                            id="outlined-basic"
                            label="Write todo"
                            variant="outlined"
                            value={todo}
                        />

                    </Box>

                    <Button
                        variant="contained"
                        onClick={handleAddTodo}
                        sx={{ height: '7ch' }}
                    >
                        Add Todo
                    </Button>

                </div>

                <div className=' border-2 border-orange-500 m-auto'>
                    {todoList.map((item, index) => (

                        <div key={index} >
                            {item.inEditMode ?
                                <>

                                    <div className={`px-3 py-1 flex justify-between items-center ${item.complete ? ' opacity-50' : ''}`}>

                                        {/* <h2 onChange={(e) => setTodo(e.target.value)} className={` border w-3/4 text-xl font-semibold ${item.complete ? 'line-through' : ''}`}>{item.text}</h2> */}
                                        <TextField
                                            onChange={(e) => setEditedTodo(e.target.value)}
                                            id="outlined-basic"
                                            label="Edit todo"
                                            variant="outlined"
                                            value={editedTodo}
                                        />
                                        <div className=' flex gap-2'>
                                            <Button
                                                onClick={() => handleTodoUpdate(item.id, editedTodo)}
                                                variant="contained"
                                                sx={{ backgroundColor: 'green' }}
                                            >
                                                Save
                                            </Button>

                                            <Button
                                                onClick={() => handleTodoEditMode(item.id)}
                                                variant="contained"
                                                sx={{ backgroundColor: 'red' }}
                                            >
                                                Cancle
                                            </Button>

                                        </div>

                                    </div>

                                </> :
                                <>
                                    <div className={`px-3 py-1 flex justify-between items-center ${item.complete ? ' opacity-50' : ''}`}>

                                        <h2 onClick={() => handleTodoToggle(item.id)} className={` border w-3/4 text-xl font-semibold ${item.complete ? 'line-through' : ''}`}>{item.text}</h2>

                                        <div className=' flex gap-2'>
                                            <Button
                                                onClick={() => handleTodoEditMode(item.id)}
                                                variant="contained"
                                                sx={{ backgroundColor: 'green' }}
                                            >
                                                Edit
                                            </Button>

                                            <Button
                                                onClick={() => handleTodoDelete(item.id)}
                                                variant="contained"
                                                sx={{ backgroundColor: 'red' }}
                                            >
                                                Delete
                                            </Button>

                                        </div>

                                    </div>

                                </>}
                        </div>

                    ))}

                </div>

            </div>

        </>

    )
}
export default InputTodo;
