import { useState } from 'react'
import './App.css'
import Plus from './svg/Plus.jsx'
import Minus from './svg/Minus.jsx'
//import {Plus, Minus} from './svg/Button.jsx'

function App() {

  const [count, setCount] = useState(0)

  var MinusOne = () => {
    console.log("minus one")
    setCount(count - 1)
  }

  var PlusOne = () => {
    console.log("plus one")
    setCount(count + 1)
  }
  return (
    <>
      <h1>Counter App</h1>
      <div id='counter'>
        <Minus onClick={MinusOne}/>
        <h3>Count: {count}</h3>
        <Plus onClick={PlusOne}/>
      </div>
    </>
  )
}

export default App
