import { useState } from 'react'

function App() {
  const [color, setColor] = useState("bg-white")


  const colorArr = [
    'bg-yellow-400',
    'bg-red-600',
    'bg-green-600',
    'bg-pink-600',
    'bg-purple-700',
    'bg-gray-600',
    'bg-white'
  ]

  return (
    <>
      <div className={`rounded-sm border-solid ${color} h-screen w-screen`}>
        <div className="w-auto h-14 bg-orange-300 rounded-2xl flex items-center" >
          {colorArr.map((colorClass, index) => (
            <button key={index} className={`${colorClass} h-8 w-20 rounded-xl`} onClick={() => setColor(colorClass)}></button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
