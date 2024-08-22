import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './features/dataSlice';
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  function handleAdd() {
    if (input !== '') {
      dispatch(addItem(input));
      setInput('');
    } else {
      alert('Please enter a value');
    }
  }

  function handleRemove() {
    if (input !== '') {
      dispatch(removeItem(input));
      setInput('');
    } else {
      alert('Please enter a value');
    }

  }

  console.log("data: ", data)

  return (
    <>
      <h1 className="text-3xl font-bold ">
        React Redux Demo App
      </h1>
      <div className="flex flex-col items-center justify-center h-screen">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}  // Ensure that input value is managed by state
          type="text"
          className="input-field p-2 my-5 border-2 border-gray-500 rounded"
        />
        <button
          onClick={handleAdd}
          className="w-32 h-16 rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl">
          Add
        </button>
        <button
          onClick={handleRemove}
          className="w-32 h-16 rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl">
          Delete
        </button>
      </div>
    </>
  )
}

export default App

