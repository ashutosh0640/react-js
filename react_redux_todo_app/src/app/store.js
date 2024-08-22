import { configureStore, createReducer } from '@reduxjs/toolkit'
import todoReducer from '../redux/todoReducer'

const rootReducer =  configureStore({
    reducer: {todoReducer},
})

export default rootReducer;

