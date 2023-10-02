// STEP 1: CONFIGURE A STORE
//the store holds all the reducers 

import { configureStore } from "@reduxjs/toolkit";

// this is counterSlice.reducer
// we can name it whatever we want because it is the default export
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    // all of our reducers from our slices will go here
    count: counterReducer,

    // theme: themeReducer,
  },
});

export default store;
