import React, { useState } from 'react'
import ReactDom from 'react-dom/client'
import { Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import './App.css'

const router = createBrowserRouter(
  createRoutersFromElements(
    <Routes>
      {/* <Route path='' element={}/>
      <Route path='' element={}/>
      <Route path='' element={}/>
      <Route path='' element={}/>
      <Route path='' element={}/>
      <Route path='' element={}/> */}
    </Routes>
  )
)

function App() {
  const [count, setCount] = useState(0)
  console.log("count: ", count)

  return (
    <>
      {/* <Header /> */}
      <h1>Hello</h1>
    </>
  )
}

export default App
