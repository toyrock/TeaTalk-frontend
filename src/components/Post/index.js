import { useState } from "react";
import "./Post.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Post({ id, title, body, setPosts, getPosts, post}){
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState(title);
  const [newPostBody, setNewPostBody] = useState(body);
  const navigate = useNavigate();


  const handleDelete = () => {
    (async function () {
    const url =`${process.env.REACT_APP_BACKEND_URL}/post/${id}`;  
    const config ={
      headers:{
        authorization: localStorage.getItem("token"),
      },
    };
  const result = await axios.delete (config, url);

  getPosts();
  })();
  
};

const handleShowAll = () => {
  setShowAll(previousValue => {
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
  (async function () {
  const url =`${process.env.REACT_APP_BACKEND_URL}/post/${id}`;  
  const config ={
    headers:{
      authorization: localStorage.getItem("token"),
    },
  };
  const result = await axios.put(
    url,
    {
      title: newPostTitle,
      body : newPostBody,
    },
  );
  getPosts();
})();

handleCancel();
};

return (
  <div className="post">
  <div className="post__input">
  <div className="username">{`${post.user.userName}`}</div> 
  {edit ? (
          <textarea
            value={newPostBody}
            onChange={(event) => setNewPostBody(event.target.value)}
          />
         ) : showAll ? (
          <p>{body}</p>
        ) : (
          <p>
            {body.length > 100 ? `${body.substring(0, 100)}...` : body}
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
            {body.length > 100 && (
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