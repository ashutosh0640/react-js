import React,{ useState, createContext } from 'react'

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    return (
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            { children }
        </TodoContext.Provider>
    )
}


