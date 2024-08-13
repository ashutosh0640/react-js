import { useState } from 'react'
import './App.css'

import TodoForm from './components/TodoForm'
import { TodoProvider } from './contexts/todoContext'

function App() {
  const [todoList, setTodoList] = useState('')


  return (
    <TodoProvider value={todoList}>
      <TodoForm />
    </TodoProvider>
  )
}

export default App
