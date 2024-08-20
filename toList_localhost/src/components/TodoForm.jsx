import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext'

import './TodoForm.css'

const TodoForm = () => {

  const [todo, setTodo] = useState('');
  const { todoList, addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    addTodo({ todo })
    setTodo("")
    console.log('todo: ',todo);
    console.log('todoList: ', todoList)
  }

  return (
    <form onSubmit={add} className=' mx-auto my-10 w-fit border-yellow-400 border-4 rounded-r-2xl'>
      <input
        type="text" 
        placeholder=' Write todo here...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className=' border-none animated-input'
      />
      <button type='submit' className=' bg-yellow-400 px-4 py-3 font-bold rounded-r-lg hover:bg-yellow-300'>ADD</button>
    </form>
  )
}

export default TodoForm
