import { useState } from 'react'
import './App.css'
import Plus from './svg/Plus.jsx'
import Minus from './svg/Minus.jsx'
//import {Plus, Minus} from './svg/Button.jsx'

function App() {

  const [count, setCount] = useState(0)

  var MinusOne = () => {
    //console.log("minus one")
    setCount(count - 1)
  }

  var PlusOne = () => {
    //console.log("plus one")
    setCount(count + 1)
  }

  const [text, setText] = useState('')
  document.getElementById('content').innerText = text;


  return (
    <>
      {/* Main div */}
      <div className=' main_div'>


        {/*Left Child Div */}
        <div className=' '>
          <h1 className=' '>Typing Master</h1>
          <div id='content'></div>
          <input className=' ' type="text" onChange={(e) => setText(e.target.value)} />
        </div>


        {/*Right Child Div */}
        <div className=' main_div_child2'>
          <h1>Counter App</h1>
          <div id='counter'>
            <Minus onClick={MinusOne} />
            <h3>Count: {count}</h3>
            <Plus onClick={PlusOne} />
          </div>
        </div>



      </div>
    </>
  )
}

export default App
