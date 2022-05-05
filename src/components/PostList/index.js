import { Post } from "components/Post";
export function PostList({ posts, setPosts, getPosts }) {
   let new2 = posts.reverse(); 
    return (
        <div class="mb-2">
          {new2.map((post) => {
              return <Post id={post._id} title={post.title} poster={post.user} body={post.body} setPosts={setPosts} post={post} getPosts={getPosts} />;
            })}
        </div>
      );
    }