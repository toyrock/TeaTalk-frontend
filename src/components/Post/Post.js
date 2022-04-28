import { useState } from "react";
import Cat from "../../assets/cat.jpg";
import "./Post.css";

// I receuve the id, the content and the setPosts function
export function Post({ id, description, setPosts, post }) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newPostDescription, setNewPostDescription] = useState(description);
  // handle Post deletion
  const handleDelete = () => {
    setPosts((previousPosts) => {
      // return the new array or filtered Posts
      return previousPosts.filter((post) => {
        // a Post is gonna stay in the array if its id is different from the the id of the curretn Post
        return post.id !== id;
      });
    });
  };

  // handle the change of variable showAll
  const handleShowAll = () => {
    setShowAll((previousValue) => {
      return !previousValue;
    });
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  const handleSave = () => {
    setPosts((previousPosts) => {
      return previousPosts.map((post) => {
        if (post.id === id) {
          return {
            id: post.id,
            description: newPostDescription,
          };
        } else {
          return post;
        }
      });
    });
    handleCancel();
  };
  return (
    <div className="post">
      <img
        width={32}
        height={32}
        className="post__img"
        src={Cat}
        alt="cat_image"
      />
      <div className="post__input">
        <div className="username">{`${post.user.userName}`}</div>
        {edit ? (
          <textarea
            value={newPostDescription}
            onChange={(event) => setNewPostDescription(event.target.value)}
          />
        ) : showAll ? (
          <p>{description}</p>
        ) : (
          <p>
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </p>
        )}

        {edit ? (
          <div className="post__actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div className="post__actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            {description.length > 100 && (
              <button onClick={handleShowAll}>
                {showAll ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
