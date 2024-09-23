import { configureStore } from "@reduxjs/toolkit";
import voteReducer from '/src/redux/voteSlice';
import todoReducer from '/src/redux/todo/todoSlice';

const store = configureStore({
    reducer: {
        votes: voteReducer,
        todos: todoReducer
    }
});

export default store;
