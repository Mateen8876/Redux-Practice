import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../screens/counterSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
