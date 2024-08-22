import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from './redux/action'
import ReactDOM from 'react-dom/client'
import './App.css'


function App() {

  const [todoText, setTodoText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const todos = useSelector((state) => state.todos);
  console.log("todos: ", todos)
  const dispatch =  useDispatch();

  const handleAddTodo =  ()  =>  {
    if(todoText.trim() !== '') {
      const newTodo = {
        id:Date.now(),
        text: todoText,
      }
      dispatch(addTodo(newTodo));
      setTodoText('');
    }

  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleEditTodo = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdateTodo = () => {
    if(editText.trim() !== '') {
      dispatch(updateTodo(editId, editText));
      setEditId(null);
      setEditText('');
    }
  };


  
  return (
    <div className="App py-5 border flex flex-col items-center ">
      <h1 className=' border '>Todo App</h1>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleUpdateTodo}>Update</button>
              </div>
            ) : (
              <div>
                <span>{todo.text}</span>
                <button onClick={() => handleEditTodo(todo)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App
