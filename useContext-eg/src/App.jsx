import { useState } from 'react'
import './App.css'

import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </ UserContextProvider>
  )
}

export default App
