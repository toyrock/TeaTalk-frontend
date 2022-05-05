import { useState } from "react";
import "./AddPost.module.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { client } from "client";

export function AddPost({ getPosts }) {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: postTitle,
      body: postBody,
    };

    const post = await client.post("/posts/create", data);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit} className="post">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Post Title</Form.Label>
        <Form.Control
          name="title"
          placeholder="Please Enter Title"
          value={postTitle}
          onChange={(event) => setPostTitle(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post Body</Form.Label>
        <Form.Control
          name="body"
          as="textarea"
          rows={6}
          value={postBody}
          onChange={(event) => setPostBody(event.target.value)}
        />
        <Button
          type="submit"
          variant="light"
          size="lg"
          class="my-3 btn-lg btn-primary"
        >
          Post
        </Button>
      </Form.Group>
    </Form>
  );
}
