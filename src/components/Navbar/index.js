import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AuthContext } from "context";
import { useContext } from "react";


export function Navbar() {
  const { logout, user, AddPost } = useContext(AuthContext);
  return (
    <nav>
      {user && <Link to="/">Home</Link>}
      {user && <Link to="/AddPost">AddPost</Link>}
      {!user && <Link to="/login">Login</Link>}
      {!user && <Link to="/signup">Signup</Link>}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}
