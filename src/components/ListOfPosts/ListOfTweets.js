import { Post } from "../Post/Post";

export function ListOfPosts({ posts, setPosts }) {
  return (
    <div>
      {posts.map((post) => {
        // we pass the id, the content and the setPosts function
        return <Post key={post._id} id={post.id} content={post.description} setPosts={setPosts} post={post} />;
      })}
    </div>
  );
}
