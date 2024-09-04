import React,{ useContext } from 'react'
import { NameContext } from '../context/NameContext'

const CompA = ({firstName}) => {
    const {lastName, setLastName} = useContext(NameContext)
    console.log("Ths is CompA", firstName)
    setLastName("Kumar");
  return (
    <div className=' w-fit p-4 text-center border-2 bg-red-400'>
        <h1>This is component A</h1>
        <p>First Name: {firstName} Last Name: {lastName}</p>
    </div>
  )
}

export default CompA
