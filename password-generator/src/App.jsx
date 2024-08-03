import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  const [upperAllowed, setUpperAllowed] = useState(true)
  const [lowerAllowed, setLowerAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  var [password, setPassword] = useState('dsfs')

  const passworrdArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", "@#$%&.", "abcdefghijklmnopqrstuvwxyz"]

  let passwordGenerator = useCallback(() => {
    let pass = ''
    var i = 0;
    while (i < length) {

      let random = Math.floor(Math.random() * 4)
      if (random === 0 && upperAllowed) {
        pass += passworrdArr[random][Math.floor(Math.random() * passworrdArr[random].length)]
        i++;
      } else if (random === 1 && lowerAllowed) {
        pass += passworrdArr[random][Math.floor(Math.random() * passworrdArr[random].length)]
        i++;
      } else if (random === 2 && numberAllowed) {
        pass += passworrdArr[random][Math.floor(Math.random() * passworrdArr[random].length)]
        i++;
      } else if (random === 3 && charAllowed) {
        pass += passworrdArr[random][Math.floor(Math.random() * passworrdArr[random].length)]
        i++;
      } else if (upperAllowed + lowerAllowed + numberAllowed + charAllowed === 0) {
        pass += passworrdArr[random][Math.floor(Math.random() * passworrdArr[random].length)]
        i++;
      }
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, upperAllowed, lowerAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, upperAllowed, lowerAllowed, passwordGenerator])

  function resetPassword() {
    setPassword('');
    const checks = document.querySelectorAll(".check")
    checks.forEach((check) => {
      check.checked = false
    })
  }

  function copyPassword() {
    const generatedPass = document.querySelector(".generatedPass");
    generatedPass.select();
    console.log("copied: ",generatedPass.innerHTML);
    navigator.clipboard.writeText(generatedPass.value);
    const copyBtn = document.querySelector(".copy-button");
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy"
    }, 2000)

    setTimeout(() => {
      // Remove text selection
      window.getSelection().removeAllRanges();
    }, 2000); // 2000 milliseconds = 2 seconds

    //alert("Password copied to clipboard");
  }

  return (
    <>
      <div className=' flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold underline text-white text-center m-10">Password Generator</h1>
        <div className=' p-5 h-fit w-2/5 flex flex-col  items-center'>


          <div className=' my-5'>
            <input className=' rounded-xl px-2 generatedPass' type="text" readOnly placeholder='Generated Password' value={password} /><button className=' bg-blue-700 mx-4 px-2 rounded-lg text-white copy-button' onClick={copyPassword}>Copy</button><button className=' bg-blue-700 mx-4 px-2 rounded-lg text-white' onClick={resetPassword}>Reset</button>
          </div>

          <div className=''>
            <input type="range" value={length} min={6} max={15} onChange={(e) => { setLength(e.target.value) }} /><label className=' mx-4 text-white'>Length: {length}</label>
          </div>


          <div className=' w-2/3 text-yellow-200 checkbox-div'>

            <div className=' flex flex-row justify-between'>
              <label htmlFor="upperCaseInput" className=' inline'>Upper Case: </label><input className=' check' type="checkbox" defaultChecked={upperAllowed} onChange={() => {
                setUpperAllowed((prev) => !prev)
              }} />
            </div>


            <div className=' flex flex-row justify-between'>
              <label htmlFor="lowerCaseInput" className=' w-fit'>Lower Case: </label><input className=' check' type="checkbox" onChange={() => {
                setLowerAllowed((prev) => !prev)
              }} />
            </div>


            <div className=' flex flex-row justify-between'>
              <label htmlFor="numberCaseInput" className=' w-fit'>Number: </label><input className=' check' type="checkbox" onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
            </div>


            <div className=' flex flex-row justify-between'>
              <label htmlFor="specialCharInput" className=' w-fit'>Special Charactor: </label><input className=' check' type="checkbox" onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />

            </div>

          </div>
        </div>

        <button className=' px-5 m-10 text-white h-12 w-fit bg-orange-700 rounded-3xl' onClick={passwordGenerator}>Generate Password</button>

      </div>
    </>
  )
}

export default App;
