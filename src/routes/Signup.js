import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigation } from "../components";

export function Signup() {
  const navigate = useNavigate();  
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // endpoint for logginin
    const url = `${process.env.REACT_APP_BACKEND_URL}/auth/signup`;
    // data you need to send to login endpoint
    const data = {      
      userName,
      email,
      password,
    };
    // axios request, you get back a response containing the token
    const response = await axios.post(url, data);
    // check if the response is OK
    if (response.status === 200) {
      // if OK navigate to login page
      navigate("/login");
    }
    /**
     * same in .then notation
     * axios.post(url, data).then(response => {
     *  if (response.status === 200) {
     *    navigate("/login");
     *  }
     * }).catch(err => console.log(err))
     */
  };
  return (
    <div className="container">
      <Navigation />
      <form className="signupForm" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label htmlFor="userName">User Name</label>        
        <input id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter user name" />
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <label htmlFor="password">Password</label>
        <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
