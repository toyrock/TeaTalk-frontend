import { NavbarCom, Login } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function LoginPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <NavbarCom />
      <h1>Please Login before your tea cold</h1>
      <Login />
    </div>
  );
}