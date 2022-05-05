import { NavbarCom, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function SignupPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <NavbarCom />
      <h3 className="mx-4 mt-4">Let`s Start TeaTalk</h3>
      <Signup />
    </div>
  );
}