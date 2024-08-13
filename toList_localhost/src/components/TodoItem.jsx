import React, {useState} from 'react'
import { useTodo } from '../contexts/todoContext'

const TodoItem = ({todo}) => {

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete} = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }



  return (
    <div>
        <input
         type="checkbox"
         />
        <input type="text" />
        <button></button>
        <button></button>
      
    </div>
  )
}

export default TodoItem;
