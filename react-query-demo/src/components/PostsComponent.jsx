import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, error, refetch } = useQuery(
    "posts",
    fetchPosts
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <button onClick={refetch}>Refetch</button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;
