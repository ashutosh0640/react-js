import React,{useState} from 'react'
import Comp02 from './Comp02';

const Comp01 = () => {
    const [name, setName] = useState("Arun");


    return (
        <div className=' border bg-red-200 w-fit h-fit flex flex-row justify-center items-center'>
            <h2>This is component 01</h2>
            <Comp02 name={name} />
        </div>
    )
}

export default Comp01
