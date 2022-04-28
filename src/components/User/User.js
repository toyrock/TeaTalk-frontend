import { useContext } from "react";
import Cat from "../../assets/cat.jpg";
import { AuthContext } from "../../context";

export function User() {
  // user the auth context to get the user
  const { user } = useContext(AuthContext);
  /* const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []); */
  return (
    <div className="user_container">
      <img
        width={128}
        height={128}
        className="post__img"
        src={Cat}
        alt="avatar_image"
      />
      <div>{user?.email}</div>

      <div>{`${user?.userName}`}</div>
    </div>
  );
}
