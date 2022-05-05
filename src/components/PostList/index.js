import { Post } from "components/Post";

export function PostList({ posts, setPosts, getPosts }) {

    return (
        <div>
          {posts.map((post) => {
              return <Post id={post._id} title={post.title} poster={post.user} body={post.body} setPosts={setPosts} post={post} getPosts={getPosts} />;
            })}
        </div>
      );
    }