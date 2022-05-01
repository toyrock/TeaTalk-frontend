import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { useNavigate} from "react-router-dom";
import { AddPost, ListOfPosts } from "components";
import { Navbar } from "components";
import styles from "./Home.module.css";
import axios from "axios";
import { AddPostPage } from "pages/AddPostPage";

export function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    // endpoint for getting tweets from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/posts`;
    // request config that is gonna hold the authorization
    const config = {
      headers: {
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setPosts(result.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

 
  return (
    <div>
      <Navbar />
      {user ? (
        <div> 
        <div>Recent Posts</div>
        </div>
      ) : (
        <p></p>
      )}
      <div>Home Page with ALL Posts</div>

    </div>
  );
}
