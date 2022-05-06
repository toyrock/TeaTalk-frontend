import styles from "./Navbar.module.css";
import { AuthContext } from "context";
import { useContext } from "react";
import {Nav, Navbar} from "react-bootstrap"


export function NavbarCom() {
  const { logout, user} = useContext(AuthContext);
  return (
  
  <div>
    <div className="row">
      <div className="col-md-12">
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand className="mx-3" href="/">
              <img
                alt="Logo"
                src="/teatalk-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
             />
            <span className="mx-2"><b>TEATALK</b></span>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
               {!user || user && <Nav.Link href="/"> HOME </Nav.Link>}
                {user && <Nav.Link href="/profile"> PROFILE </Nav.Link>}
                {user && <Nav.Link href="/addPost"> ADD POST </Nav.Link>}
                {!user && <Nav.Link href="/login"> LOGIN </Nav.Link>}
                {!user && <Nav.Link href="/signup"> SIGN UP </Nav.Link>}
              </Nav>
                <Navbar.Text>
                {user && <Nav.Link onClick={logout}> LOGOUT </Nav.Link>}
              </Navbar.Text>
            </Navbar.Collapse>
            <Nav className="mx-4">{user && <Nav.Link href="/profile"> <h5><b>{user.userName}</b></h5></Nav.Link>}</Nav>
        </Navbar>                 
      </div>
    </div>
  </div>

  );
}
