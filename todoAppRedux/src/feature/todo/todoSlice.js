import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: false },
    ],
    reducers: {
        addTodo(state, action) {
            state.push(action.payload);
            // return [...state, action.payload]; return a new state object manually to ensure immutability
        },
        removeTodo(state, action) {
            state = state.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodo(state, action) {
            state = state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        },
    }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducers;