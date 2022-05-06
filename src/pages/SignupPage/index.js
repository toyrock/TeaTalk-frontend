import { NavbarCom, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";
import styles from "./Signup.module.css";

export function SignupPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <NavbarCom />
      <div className={styles.listContainer}>
       <div style={{ width: "50rem" }}>
        <h3>Let`s Start TeaTalk</h3>
       </div>
      <Signup />
      </div>
    </div>
  );
}