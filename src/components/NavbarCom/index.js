import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AuthContext } from "context";
import { useContext } from "react";
import {Nav, Navbar, Container} from "react-bootstrap"


export function NavbarCom() {
  const { logout, user} = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">TEATALK </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      {user && <Nav.Link href="/AddPost"> Add Post </Nav.Link>}
      {!user && <Nav.Link href="/login"> Login </Nav.Link>}
      {!user && <Nav.Link href="/signup"> Sign Up </Nav.Link>}
      {user && <Nav.Link href="/"> <p>{user.userName}</p></Nav.Link>}
      </Nav>
      <Navbar.Text>
      {user && <Nav.Link onClick={logout}> Logout </Nav.Link>}
      </Navbar.Text>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
