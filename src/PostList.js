const PostList = ({ posts, title }) => {
  return (
    <div className="posts">
      <h2>{title}</h2>
      {posts.map((post) => (
        <div className="posts__preview" key={post.id}>
          <h2 className="posts__title">{post.title}</h2>
          <p>Written by {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
