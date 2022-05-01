import { useState } from "react";
import "./AddPost.module.css";
import axios from "axios";

export function AddPost({ getPosts }) {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

const handleSubmit = async event => {
    event.preventDefault();

    const data = {
        title: postTitle,
        body: postBody,
    };
    const url = `${process.env.REACT_APP_BACKEND_URL}/posts/create`;

    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    const post = await axios.post(url, data, config);
    setPostTitle("");
    setPostBody("");
};

return(
    <form onSubmit = {handleSubmit} className="post">
    <div>
    <input name="title" value={postTitle}
    onChange={event => setPostTitle(event.target.value)} />
    
    <textarea name="body" value = {postBody}
    onChange={event => setPostBody(event.target.value)} />
    <button type="submit">Post</button>
    </div>

    </form>

)

}
