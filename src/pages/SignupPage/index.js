import { NavbarCom, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function SignupPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <NavbarCom />
      <h1>Lets Start to teatalk</h1>
      <Signup />
    </div>
  );
}