import { NavbarCom, AddPost} from "components";
import { AuthContext } from "context";
import { useContext } from "react";


export function AddPostPage(){
    const { user } = useContext(AuthContext);

    return (
        <div>
          <NavbarCom />
          <h1>Please Add Post</h1>
          <AddPost />
        </div>
      );
    }
