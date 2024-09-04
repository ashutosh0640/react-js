import React,{useState} from 'react'
import CompC from './CompC'

const CompD = () => {
  const [firstName, setFirstName] = useState("Ashutosh")
  console.log("Ths is CompD", firstName)
  
  return (
    <div className=' w-fit p-4 border-2 text-center bg-teal-400'>
        <h1>This is component D</h1>
        <CompC firstName={firstName}/>
    </div>
  )
}

export default CompD
