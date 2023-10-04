// STEP 2: CREATE THE RTK QUERY API

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  // this is the name of the api slice
  reducerPath: "postsApi",

  // setup the baseQuery - this will be used across all endpoints
  baseQuery: fetchBaseQuery({
    // base URL for all of our API calls
    baseUrl: "https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF",
    // set the Content-Type header to application/json
    prepareHeaders: (headers) =>
      headers.set("Content-Type", "application/json"),
  }),

  // define the API endpoints we are trying to access
  endpoints: (builder) => ({
    // specify the query function for getting all posts
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export default postsApi;

// export the hook so we can use it in our components
// hook is named "useGetPostsQuery" because the endpoint was named "getPosts"
export const { useGetPostsQuery } = postsApi;
