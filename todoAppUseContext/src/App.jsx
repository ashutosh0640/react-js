import { useState } from 'react'
import './App.css'
import InputComp from './components/InputComp'
import TodoListComp from './components/TodoListComp'
import { TodoProvider } from './context/TodoContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoProvider>
        <h1 className="text-3xl font-bold text-center">
          Todo App useContext
        </h1>
        <InputComp />
        {/* <TodoListComp/> */}

      </TodoProvider>

    </>
  )
}

export default App
