import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { NavbarCom, AddPost, Post, PostList } from "components";
import styles from "./Home.module.css";
import axios from "axios";

export function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    // endpoint for getting tweets from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/posts`;
    // request config that is gonna hold the authorization
    const config = {
      headers: {},
    };
    // make the request
    const result = await axios.get(url, config);
    /*if(result.data.length>0) {
      var looper = [];
      result.data.forEach(function(singlePost, index) {
        var item = singlePost;
        item.poster = singlePost.user;
        looper.push(item);
      });
      console.log(looper);
      setPosts(looper);
    } else {
      setPosts(result.data);
    }*/
    setPosts(result.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <NavbarCom />
      <div className={styles.listContainer}>
        <div style={{ width: "50rem" }}>
          <h3>Posts</h3>
        </div>
        {user ? (
          <div>
            <PostList posts={posts} setPosts={setPosts} getPosts={getPosts} />
          </div>
        ) : (
          <div>
            <PostList posts={posts} setPosts={setPosts} getPosts={getPosts} />
          </div>
        )}
      </div>
    </div>
  );
}
