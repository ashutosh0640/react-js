import React,{useId} from 'react'

function InputBox({FromTo, amount, onAmountChange, selectedCurrency = "usd", onCurrencyChange, currencyOptions=[]}) {

    const amountInputId = useId();

    return (
        <div className=' w-fit h-24 mx-auto text-justify rounded-xl flex justify-center bg-white border-2 border-red-500'>

            <div className=' mx-2 w flex flex-col justify-center items-start border-2 border-yellow-500'>
                <label htmlFor={amountInputId} className=' text-neutral-950'>{FromTo}</label>

                <input
                    className=' px-1 w-2/3 focus:outline-none bg-slate-600 text-white'
                    id={amountInputId}
                    type="number"
                    placeholder='Enter Amount'
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />

            </div>


            <div className=' mx-2 flex flex-col justify-center border-2 border-green-500'>

                <p className=' w-fit text-neutral-950'>Currency Type</p>

                <select className=' max-h-10 focus:outline-none bg-slate-600 text-white' value={selectedCurrency}>
                    {currencyOptions.map((option, index) => (
                        <option className=' max-h-10' key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

            </div>

        </div>
    )
}

export default InputBox;


