import { Login, Signup } from "components";
import { Navbar } from "components";
import { AuthContext } from "context";
import { useContext, useState } from "react";

export function Landing() {
  const { user } = useContext(AuthContext);
  const [isRegistered, setIsRegistered] = useState(true);
  console.log(user)
  return (
    <div>
      <h1>{isRegistered ? 'Login' : 'Signup'}</h1>
      {isRegistered ?<Login handleSignUp={() => setIsRegistered(false)}/>:<Signup handleLogin={() => setIsRegistered(true)}/>}
    </div>
  );
}
