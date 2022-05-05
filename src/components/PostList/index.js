import { Post } from "components/Post";
import { useEffect, useState } from "react";
export function PostList({ posts, setPosts, getPosts }) {
  const [reversedPosts, setReversedPosts] = useState([])

  useEffect(() => {
    let tmp = [...posts]
    tmp.reverse()
    setReversedPosts(tmp)
  }, [reversedPosts])
    return (
        <div class="mb-2">
          {reversedPosts.map((post) => {
              return <Post id={post._id} title={post.title} poster={post.user} body={post.body} setPosts={setPosts} post={post} getPosts={getPosts} />;
            })}
        </div>
      );
    }