import { Navbar, Login } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function LoginPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Please Login before your tea get cold</h1>
      <Login />
    </div>
  );
}