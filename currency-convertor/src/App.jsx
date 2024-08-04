import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './customHooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const { currencyInfo } = useCurrencyInfo(from);
  console.log("currencyInfo: ", currencyInfo);
  // const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
      <h1 className=" my-10 text-3xl text-center font-bold underline text-yellow-600">Currency Convertor</h1>
      <div className=' flex flex-col justify-center items-center'>
        <InputBox FromTo="From" amount={amount} />
        <button className=' w-fit px-2 py-1 m-5 rounded-lg text-white bg-blue-600' onClick={swap}>swap</button>
        <InputBox FromTo="To" />
        <button className=' w-fit px-2 py-1 m-5 rounded-lg text-white bg-blue-600' onClick={convert}>Convert {from} to {to}</button>
      </div>

    </>
  )
}

export default App
