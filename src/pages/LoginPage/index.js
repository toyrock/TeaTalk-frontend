import { NavbarCom, Login } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function LoginPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <NavbarCom />
      <h3 className="mx-4">Login before your tea get cold</h3>
      <Login />
    </div>
  );
}