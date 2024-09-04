import React from 'react'
import CompB from './CompB'

const CompC = ({firstName}) => {
    console.log("Ths is CompC", firstName)
  return (
    <div className=' w-fit p-4 text-center border-2 bg-yellow-400'>
        <h1>This is component C</h1>
        <CompB firstName={firstName}/>
    </div>
  )
}

export default CompC
