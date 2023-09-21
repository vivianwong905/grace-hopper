// STEP 2: Create a SLICE to add to our store

import { createSlice } from "@reduxjs/toolkit";

// createSlice takes an object as argument with name, initialState and reducers
// createSlice returns an object {actions: [...], reducer: {...}}
const counterSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    // Reducer function to increment the counter
    increment: (state) => state + 1,

    // Reducer function to decrement the counter
    decrement: (state) => state - 1,

    // Reducer function to reset the counter
    reset: (state) => 0,

    // Reducer function to increment by a certain number
    // incrementBy: (state, action) => state += action.payload
  },
});

export default counterSlice.reducer;

export const { increment, decrement, reset } = counterSlice.actions;
