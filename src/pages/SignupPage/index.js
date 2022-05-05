import { Navbar, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function SignupPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <h1>Lets Start to teatalk</h1>
      <Signup />
    </div>
  );
}