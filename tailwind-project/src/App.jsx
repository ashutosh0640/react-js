import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <h1 className='text-red-500 bg-gray-700 rounded-xl '>Tailwind Tested successfully.</h1>
    </>
  )
}

export default App
