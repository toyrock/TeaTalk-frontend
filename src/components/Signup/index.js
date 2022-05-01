import styles from "./Signup.module.css";
import { useState, useContext } from "react";
import { AuthContext } from "context";

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
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor="userName">Username:</label>
      <input
        id="userName"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type ="submit">Signup</button>
    </form>
    <div>Already a member?<button onClick={handleLogin}>Login</button></div>
    </div>
  );
}
