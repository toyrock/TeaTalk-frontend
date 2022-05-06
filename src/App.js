import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import {NavbarCom} from "components";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // variable to store file url
    return (
    <div>
      <NavbarCom />
      <Outlet />
    </div>
  );
}

export default App;
