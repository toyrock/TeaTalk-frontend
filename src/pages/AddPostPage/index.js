import { NavbarCom, AddPost} from "components";
import { AuthContext } from "context";
import { useContext } from "react";


export function AddPostPage(){
    const { user } = useContext(AuthContext);

    return (
        <div>
          <NavbarCom />
          <h3 className="mx-4 mt-2">Post</h3>
          <AddPost />
        </div>
      );
    }
