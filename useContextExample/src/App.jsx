import { useState } from 'react'
import './App.css'
import CompD from './components/CompD'
import { NameProvider } from './context/NameContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NameProvider>
        <CompD />
      </NameProvider>
    </>
  )
}

export default App
