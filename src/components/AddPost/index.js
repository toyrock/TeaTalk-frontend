import { useState } from "react";
import "./AddPost.module.css";
import axios from "axios";
import {Form ,Button} from "react-bootstrap"

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
    
    <Form onSubmit = {handleSubmit} className="post">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Post Title</Form.Label>
            <Form.Control name="title" placeholder="Please Enter Title" value={postTitle} onChange={event => setPostTitle(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post Body</Form.Label>
            <Form.Control name="body" as="textarea" rows={6} value = {postBody} onChange={event => setPostBody(event.target.value)} />
            <Button type="submit" variant="light" size="lg" class="my-3 btn-lg btn-primary" >Post</Button>
            </Form.Group>
    
    </Form>

)

}
