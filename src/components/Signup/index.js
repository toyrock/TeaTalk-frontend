import styles from "./Signup.module.css";
import { useState, useContext } from "react";
import { AuthContext } from "context";
import {Form, Button} from "react-bootstrap"

export function Signup({handleLogin}) {
  const { signup } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userName, email, password);
  };

  return (
    <div>
     <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label >User Name</Form.Label>
          <Form.Control id="userName" placeholder="Enter Username"
          value={userName} onChange={(e) => {
          setUserName(e.target.value);
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control id="email" type="email" placeholder="Enter email"
          value={email} onChange={(e) => {
          setEmail(e.target.value);
          }} />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control id="password" type="password" value={password} placeholder="Password"  onChange={(e) => {
          setPassword(e.target.value);
          }} />
        </Form.Group>
        <Button type ="submit" variant="secondary">Signup</Button>
      <div>Already a member ?<Button variant="Link" href="/login">Login</Button></div>
     </Form>
    </div>
  );
}
