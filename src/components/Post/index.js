import { useState } from "react";
import "./Post.module.css";
import axios from "axios";
import { AuthContext } from "context";
import { useContext } from "react";
import {Card, Button} from "react-bootstrap"


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
  <div className="d-flex justify-content-around">
  <Card border="secondary" style={{ width: '50rem' }}>
  <Card.Header as="h5"><p>{poster.userName}</p></Card.Header>
  <Card.Body>
  <div key="{id}">
    <div>
    <Card.Title>
      {edit ? (
        <input
          value={newPostTitle}
          onChange={(event) => setNewPostTitle(event.target.value)}
        />
      ) : (
        <p>{title}</p>
      )} 
    </Card.Title>   
    <Card.Text>
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
      </Card.Text>
      {edit ? (
        <div>
          <Button variant="secondary" size="sm" onClick={handleSave}>Save</Button>{' '}
          <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
        </div>
      ) : (
        <div>
          {body.length > 100 && (
            <Button variant="link" size="sm" onClick={handleShowAll}>
              {showAll ? "Read less" : "Read more"}
            </Button>
          )}
          {user && poster._id === user._id ? (
            <div>
              <Button variant="secondary" size="sm" onClick={handleEdit}>Edit</Button>{' '}
              <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
            </div>
          ) : (
            <div>&nbsp;</div>
          )}
          
        </div>
      )}
      </div>
     </div>
     </Card.Body>
   </Card>
</div>

);
}