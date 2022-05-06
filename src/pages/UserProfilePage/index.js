import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { NavbarCom,PostList } from "components";
import styles from "./UserProfilePage.module.css";
import { client } from "client";

export function UserProfilePage() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    // make the request
    const result = await client.get("/posts/owned");
 
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
         {user && <h3>{user.userName}</h3>}
          {user && <h3>{user.email}</h3>}
          <h3 className="mt-4">My Posts</h3>
          
        </div>
        {user ? (
          <div>
            <PostList posts={posts} setPosts={setPosts} getPosts={getPosts} />
          </div>
        ) : (
          <div>  
          </div>
        )}
      </div>
    </div>
  );
}
