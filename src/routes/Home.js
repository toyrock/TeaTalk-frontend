import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AddPost, ListOfPosts, Navigation } from "../components";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

export function Home() {
  const [posts, setPosts] = useState([]);
  // user the auth context to get the user
  const { user } = useContext(AuthContext);
  // check if user is correct

  // function to get Posts from the backend, this was moved from inside useEffect
  const getPosts = async () => {
    // endpoint for getting Posts from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/posts`;
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

  // always useEffect when doing an API call
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <Navigation />
      <AddPost getPosts={getPosts} />
      <ListOfPosts posts={posts} />
    </div>
  );
}
