import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            const newTodo = {
                id: uuidv4(),
                text: action.payload,
                complete: false,
                inEditMode: false
            };
            state.push(newTodo);
        },
        removeTodo(state, action) {
            return state.filter(todo => todo.id !== action.payload);
        },
        toggleTodo(state, action) {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state[index].complete = !state[index].complete;
            }

            {/*

                const { id } = action.payload;
                const existingTodo = state.find(todo => todo.id === id);
                if (existingTodo) {
                    existingTodo.completed == !existingTodo.completed;
                }
                
                
            */}
        },
        updateTodo(state, action) {

            const { id, text } = action.payload;
            const existingTodo = state.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }

            {/**
            
            const index = state.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state[index].text = action.payload.text;
            }

            */}

        },
        toggleEditMod(state, action) {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state[index].inEditMode = !state[index].inEditMode;
            }
        }
    }

});

export const { addTodo, removeTodo, toggleTodo, updateTodo, toggleEditMod } = todoSlice.actions;
export default todoSlice.reducer;