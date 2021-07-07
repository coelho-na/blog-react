import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, author };

    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("new post added");
      setIsLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create-post">
      <h2 className="create-post__title">Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label className="create-post__label">Post title:</label>
        <input
          className="create-post__input"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="create-post__label">Post body:</label>
        <textarea
          className="create-post__textarea"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label className="create-post__label">Post author:</label>
        <select
          className="create-post__selection"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isLoading && (
          <button className="create-post__button">Add Post</button>
        )}
        {isLoading && (
          <button className="create-post__button">Adding Post...</button>
        )}
      </form>
    </div>
  );
};

export default Create;
