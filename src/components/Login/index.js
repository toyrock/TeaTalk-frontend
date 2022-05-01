import styles from "./Login.module.css";
import { AuthContext } from "context";
import { useContext, useState } from "react";
import { Router } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
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
      <button>login</button>
    </form>
   {error && <p style={{color:'red'}}>{error}</p>}
    <div>Not a member yet?<button onClick={handleSignUp}>Sign up</button></div>
    </div>
  );
}
