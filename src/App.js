import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar,} from "components";


function App() {
  // variable to store file url
    return (
    <div>
      <Navbar />
      <Outlet />
      footer
    </div>
  );
}

export default App;
