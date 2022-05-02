import { Navbar, Post} from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function PostPage () {
  const { user } = useContext(AuthContext);

    return (
        <div>
          <Navbar />
          <Post />
        </div>
      );
    };



