import PostList from "./PostList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <div> Loading... </div>}
      {posts && <PostList posts={posts} title="All Blogs!" />}
    </div>
  );
};

export default Home;
