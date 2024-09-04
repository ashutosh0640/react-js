import React from 'react'
import CompA from './CompA'

const CompB = ({firstName}) => {
    console.log("Ths is CompB", firstName)
  return (
    <div className=' w-fit p-4 text-center border-2 bg-green-400'>
        <h1>This is component B</h1>
        <CompA firstName={firstName}/>
    </div>
  )
}

export default CompB
