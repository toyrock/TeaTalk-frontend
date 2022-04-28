import { useEffect, useState } from "react";
import { ListOfPosts, Navigation, User } from "../components";
import axios from "axios";

export function Profile() {
  const [posts, setPosts] = useState([]);

  // function to get Posts from the backend, get the Posts owned by the curretn user
  const getPosts = async () => {
    // endpoint for getting Posts from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/posts/owned`;
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
  return (
    <div className="container">
      <Navigation />
      {/* user component to show info about the user */}
      <User />
      {/* list of Posts owned by a user */}
      <ListOfPosts posts={posts} />
    </div>
  );
}
