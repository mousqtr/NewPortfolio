import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useNavigation } from "../../hooks/useNavigation";

import "./NavBar.scss";

function NavBar() {
  const { changePage } = useNavigation();
  return (
    <div id="navBar">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" onClick={(e) => changePage(e, "home")}>
            <img src="/img/codinplace.png" alt="logo-image" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>FR</Nav.Link>
            <Nav.Link href="#connection" className="btn-dark">
              Connection
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
