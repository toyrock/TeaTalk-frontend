import { NavbarCom, Login } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function LoginPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <h1>Please Login before your tea get cold</h1>
=======
      <Navbar />
=======
      <NavbarCom />
>>>>>>> 5c1ba2843d064c450703ebf938d7bc84a0de7364
      <h1>Please Login before your tea cold</h1>
>>>>>>> 0a51a91bdf07afc03cc43f31d9118e77c449a289
      <Login />
    </div>
  );
}