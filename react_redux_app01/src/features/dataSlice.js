import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: ['Item 1', 'Item 2', 'Item 3'],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.data.push(action.payload);
        },
        removeItem: (state, action) => {
            state.data = state.data.filter(item => item !== action.payload);
        }
    }
});

export const { addItem, removeItem } = dataSlice.actions;
export default dataSlice.reducer;