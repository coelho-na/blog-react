import { Link } from "react-router-dom";

const PostList = ({ posts, title }) => {
  return (
    <div className="posts">
      <h2>{title}</h2>
      {posts.map((post) => (
        <div className="posts__preview" key={post.id}>
          <Link className="posts__link" to={`/blogs/${post.id}`}>
            <h2 className="posts__title">{post.title}</h2>
            <p>Written by {post.author}.</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
