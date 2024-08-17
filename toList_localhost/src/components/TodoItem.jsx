import React, {useState} from 'react'
import { useTodo } from '../contexts/todoContext'

const TodoItem = ({todo}) => {

    const [checked, setChecked] = useState(false);
    const [msg, setMsg] = useState(todo.todo);
    console.log('msg: ',msg);
    

    function handleCheckbox() {
      // setChecked({
      //   checked : !checked
      // })

      // setChecked(!checked)

      // if (checked) {
      //   alert ("unchecked!");
      // } else {
      //   alert ("checked!");
      // }

    }

    function handleEdit() {

    }

    function handleRemove() {

    }



  return (
    <div className=' pl-2 mx-auto my-2 w-fit bg-white rounded-r-2xl'>
        <input type="checkbox" name="checkfield" onChange={handleCheckbox} />
        <input type="text" value={msg} className=' px-2 py-1 max-w-fit focus:outline-none ' />
        <button className=' px-2 py-1 rounded-l-2xl font-semibold bg-green-300 hover:bg-green-500'onClick={handleEdit}>EDIT</button>
        <button className=' px-2 py-1 rounded-r-2xl font-semibold bg-red-300 hover:bg-red-500' onClick={handleRemove}>REMOVE</button>
    </div>
  )
}

export default TodoItem;
