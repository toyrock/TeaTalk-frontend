import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AuthContext } from "context";
import { useContext } from "react";


export function Navbar() {
  const { logout, user} = useContext(AuthContext);
  return (
    <nav>
    
      <Link to="/">Home</Link>
      {user && <Link to="/AddPost"> Add Post </Link>}
      {!user && <Link to="/login"> Login </Link>}
      {!user && <Link to="/signup"> Sign Up </Link>}
      {user && <button onClick={logout}> Logout </button>}
      {user && <p>{user.userName}</p>}
  
    </nav>
  );
}
