import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Error fetching posts");
  }

  return response.json();

};

function PostsComponent() {

  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery(
    "posts",
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 10, // 10 minutes
      staleTime: 1000 * 60 * 5,  // 5 minutes
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  );

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (

    <div>

      <h2>Posts List</h2>

      <button onClick={refetch}>
        Refetch Posts
      </button>

      {data.map((post) => (

        <div key={post.id}>

          <h3>{post.title}</h3>

          <p>{post.body}</p>

          <hr />

        </div>

      ))}

    </div>

  );

}

export default PostsComponent;
