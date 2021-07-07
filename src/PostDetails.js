import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="post-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <article>
          <h2 className="post-details__title">{post.title}</h2>
          <p className="post-details__author"> Written by {post.author}</p>
          <div className="post-details__content"> {post.body}</div>
          <div className="post-details__buttonContainer">
            <button className="post-details__button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
