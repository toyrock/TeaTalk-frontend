import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { useNavigate} from "react-router-dom";
import { AddPost, ListOfPosts } from "components";
import styles from "./Home.module.css";
import axios from "axios";

export function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    // endpoint for getting tweets from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/post`;
    // request config that is gonna hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setPosts(result.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

// !user && navigate("/login");
  return (
    <div>
    {user? (
      <div>
      <h1>Home</h1>
      <AddPost getPosts={getPosts} setPosts={setPosts} />
      <code>{JSON.stringify(user)}</code>
    </div>
    ) : <p>Go login</p>
    }  
    </div>
  );
}
