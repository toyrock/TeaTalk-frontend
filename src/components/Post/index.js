import { useState } from "react";
import "./Post.module.css";
import axios from "axios";
import { AuthContext } from "context";
import { useContext } from "react";


export function Post({ id, title, body, poster, setPosts, getPosts, post}){
  const { logout, user } = useContext(AuthContext);
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState(title);
  const [newPostBody, setNewPostBody] = useState(body);

  const handleDelete = () => {
    (async function () {
    const url =`${process.env.REACT_APP_BACKEND_URL}/posts/${id}`;  
    const config ={
      headers:{
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.delete (url, config);

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
  const url =`${process.env.REACT_APP_BACKEND_URL}/posts/${id}`;  
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
    config
  );
  getPosts();
})();

handleCancel();

};

return (
  <div key="{id}">
    <div>
      {edit ? (
        <input
          value={newPostTitle}
          onChange={(event) => setNewPostTitle(event.target.value)}
        />
      ) : (
        <p>{title}</p>
      )}
      {edit ? (
        <textarea
          value={newPostBody}
          onChange={(event) => setNewPostBody(event.target.value)}
        />
      ) : showAll ? (
        <p>{body}</p>
      ) : (
        <p>{body.length > 100 ? `${body.substring(0, 100)}...` : body}</p>
      )}
      {edit ? (
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          {body.length > 100 && (
            <button onClick={handleShowAll}>
              {showAll ? "Read less" : "Read more"}
            </button>
          )}
          {user && poster._id === user._id ? (
            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          ) : (
            <div>&nbsp;</div>
          )}
          <p>{poster.userName}</p>
        </div>
      )}
    </div>
  </div>
);
}