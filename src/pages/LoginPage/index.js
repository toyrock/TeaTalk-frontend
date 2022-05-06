import { NavbarCom, Login } from "components";
import { AuthContext } from "context";
import { useContext } from "react";
import styles from "./Login.module.css";

export function LoginPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <NavbarCom />
      <div className={styles.listContainer}>
       <div style={{ width: "50rem" }}>
        <h3>Login before your tea get cold</h3>
      </div>
      <Login />
      </div>
    </div>
  );
}