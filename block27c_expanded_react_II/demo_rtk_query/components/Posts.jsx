import React, { useState, useEffect } from "react";

import { useGetPostsQuery } from "../redux/api/postsApi";

// CSS Module that returns a styles object
// we can use this to set className in our JSX
import styles from "./Posts.module.css";

// React component for displaying posts
function Posts() {
  // GOAL: usePostsQuery that gets the data, isLoading, error
  const { data, error, isLoading } = useGetPostsQuery();
  console.log(data);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  // Display the posts if data is available
  return (
    <div className={styles.posts}>
      {data &&
        data.data.posts.map((post) => ( //implicit return
          <div key={post._id} className={styles.post}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Posts;
