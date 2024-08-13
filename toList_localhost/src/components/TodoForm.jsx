import React, {useState} from 'react'
import { useTodo } from '../contexts/todoContext'

import './TodoForm.css'

const TodoForm = () => {

    const [todo, setTodo] = useState('');
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault()
        if (!todo) return

        addTodo({todo, completed: false})
        setTodo("")

    }
    
  return (
    <form onSubmit={add} className=' w-fit border-yellow-400 border-4 rounded-r-2xl'>
        <input 
        type="text" placeholder=' Write todo here...'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        className=' border-none animated-input'
        />
        <button type='submit' className=' bg-yellow-400 px-4 py-3 font-bold rounded-r-lg'>ADD</button>
    </form>
  )
}

export default TodoForm
