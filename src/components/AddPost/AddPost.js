import { useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import Cat from "../../assets/cat.jpg";
import "./AddPost.css";

// add posts is for getting new posts when adding a new one
export function AddPost({ getPosts }) {
  const [postInput, setPostInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // data to send in the request body
    const data = {
      content: postInput,
    };
    // url of the endpoint for posts
    const url = `${process.env.REACT_APP_BACKEND_URL}/posts`;
    // reqest configuration for adding a header with authorization
    const config = {
      headers: {
        // read token from local storage and send it with request
        authorization: localStorage.getItem("token"),
      },
    };
    // make a request with axios
    const post = await axios.post(url, data, config);
    // get posts from the backend 
    getPosts(post);
  };
  return (
    <form onSubmit={handleSubmit} className="post">
      <img
        width={32}
        height={32}
        className="post__img"
        src={Cat}
        alt="cat_image"
      />
      <div className="post__input">
        <textarea
          value={postInput}
          onChange={(event) => setPostInput(event.target.value)}
        />
        <button type="submit">Post</button>
      </div>
    </form>
  );
}
