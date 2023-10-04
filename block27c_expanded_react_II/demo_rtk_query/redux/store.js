// STEP 1: CONFIGURE THE STORE

import { configureStore } from "@reduxjs/toolkit";

// Import setupListeners if you are using refetchOnFocus or refetchOnReconnect
// import { setupListeners } from '@reduxjs/toolkit/query/react';

import postsApi from "./api/postsApi";

const store = configureStore({
  reducer: {
    // STEP 4: Add the API reducer to the store
    // key will be "postsApi"
    // because that is the reducerPath set by createApi
    [postsApi.reducerPath]: postsApi.reducer, // this should match line 7 in postsApi.js
  },

  // STEP 5: add your API middleware
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApi.middleware); // this middleware was made by createApi
  },
});

// OPTIONAL: but required for
// refetchOnFocus or refetchOnReconnect

// setupListeners(store.dispatch);

export default store;
