import React, {useContext} from 'react'

export const TodoContext = React.createContext({
    todoList: [
        {id:1, todo: 'Todo msg', completed: false}
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}

