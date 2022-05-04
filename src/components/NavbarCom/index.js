import {Link,Route} from "react-router-dom";
import styles from "./Navbar.module.css";
import { AuthContext } from "context";
import { useContext } from "react";
import {Nav, Navbar, Container, img} from "react-bootstrap"


export function NavbarCom() {
  const { logout, user} = useContext(AuthContext);
  return (
    <>
  <div>
    <div className="row">
      <div className="col-md-12">
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">
              <img
                alt="Logo"
                src="/teatalk-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
             />
            TEATALK 
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {user && <Nav.Link href="/AddPost"> Add Post </Nav.Link>}
                {!user && <Nav.Link href="/login"> Login </Nav.Link>}
                {!user && <Nav.Link href="/signup"> Sign Up </Nav.Link>}
                {/* {user && <Nav.Link href="/"> <p>{user.userName}</p></Nav.Link>} */}
              </Nav>
                <Navbar.Text>
                {user && <Nav.Link onClick={logout}> Logout </Nav.Link>}
              </Navbar.Text>
            </Navbar.Collapse> 
        </Navbar>                 
      </div>
    </div>
  </div>
  </>
  );
}
