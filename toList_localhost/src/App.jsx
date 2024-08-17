import { useState } from 'react'
import './App.css'

import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useTodo, TodoProvider } from './contexts/todoContext'

function App() {

  const [todoList, setTodoList] = useState([]);

  function addTodo(todo) {
    setTodoList((prev) => [{id: Date.now(), todo, completed:false}, ...prev])

  }

  function updateTodo(id, todo) {
    // setTodoList((prev) => prev.map((item) => item.id === id ? {
    //   ...item,

    setTodoList((prev)=>prev.map((item)=>item.id===id?todo:item))


  }


  function deleteTodo() {

  }

  function toggleComplete() {

  }
  


  return (
    <TodoProvider value={{todoList, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <TodoForm />
      <div>{todoList.map((todo)=>{
        <TodoItem key={todo.id} todo={todo} />
      })} </div>
    </TodoProvider>
  )
}

export default App
