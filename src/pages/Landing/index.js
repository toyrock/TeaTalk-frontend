import { Login, Signup } from "components";
import { Navbar } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function Landing() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Login / Signup</h1>
      <Signup /> 
      <Login /> 
    </div>
  );
}
