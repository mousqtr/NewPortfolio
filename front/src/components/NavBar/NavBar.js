import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.scss";

function NavBar() {
  return (
    <div id="navBar">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Benbrikho Consulting</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#skills">Compétences</Nav.Link>
              <Nav.Link href="#experiences">Expériences</Nav.Link>
              <Nav.Link href="#formation">Formation</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
