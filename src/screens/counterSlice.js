import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        incrementAllowed: false,
    },
    reducers: {
        increment: (state) => {
            if (state.value < 200) {
                state.value += 1;
            }
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        setIncrementAllowed: (state, action) => {
            if (action.payload === '20') {
                state.value = 20;
                state.incrementAllowed = true;
            } else {
                state.incrementAllowed = false;
            }
        },
        reset: (state) => {
            state.value = 0;
            state.incrementAllowed = false;
        },
    },
});

export const { increment, decrement, setIncrementAllowed, reset } = counterSlice.actions;
export default counterSlice.reducer;
