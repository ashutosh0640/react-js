import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './customHooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  console.log("currencyInfo: ", currencyInfo);
  const options = Object.keys(currencyInfo);

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
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div>
            <InputBox 
              FromTo='From'
              amount={amount}
              selectedCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyOptions={options}
            />
          </div>


        </form>
      </div>
    </>
  )
}

export default App
