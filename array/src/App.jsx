import { useState } from 'react'
import './App.css'

function App() {
  const data = [
    { id: 1, name: "John", age: 25, skills: ["JavaScript", "React"] },
    { id: 2, name: "Jane", age: 30, skills: ["Java", "Spring Boot"] },
    { id: 3, name: "Bob", age: 22, skills: ["JavaScript", "Angular"] },
    { id: 4, name: "Hemu", age: 25, skills: ["Java", "JavaScript", "React"] },
    { id: 5, name: "Hena", age: 30, skills: ["Java", "Rust", "Spring Boot"] },
    { id: 6, name: "ansh", age: 22, skills: ["JavaScript", "Go", "Angular"] }
  ];

  const fileterDate = data.filter((item, index)=>{
    return item.skills.includes("Go")
  })
  console.log("filterDate: ",fileterDate);


  const avgAge = data.reduce((sum, item) => sum+item.age, 0)/data.length;
  console.log("avgAge: ", avgAge);

  const maxAge = data.reduce((maxAge, item)=> item.age>maxAge?item.age:maxAge, data[0].age);
  console.log("maxAge: ", maxAge);

  const uniqueSkill = data.map((item, index) => {
    return item.skills
  })
  console.log("uniqueSkill: ", uniqueSkill);

  const updateData = data.map(({age, ...rest})=>rest);
  console.log("updateDate: ", updateData);

  const mergeData = data.reduce((acc, item)=>{
    acc[item.name] = item;
    return acc;
  },{})
  console.log("mergeData: ", mergeData);

  return (
    <>
      <h1>
        hello
      </h1>
    </>
  )
}

export default App
