import styles from "./Login.module.css";
import { AuthContext } from "context";
import { useContext, useState } from "react";
import { Router } from "react-router-dom";
import {Form, Button} from "react-bootstrap"

export function Login({handleSignUp}) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getUser = await login(email, password);
    getUser ? setError('') : setError("User not found")
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Email address</Form.Label>
          <Form.Control id="email" placeholder="Enter email"
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
        <Button variant="secondary" type="submit">Login</Button>
      </Form>

       {error && <p style={{color:'red'}}>{error}</p>}
      <div>Not a member yet?<Button variant="Link" href="/signup">Sign Up</Button></div>
    
   </div>
  );
}
