import { useNavigation } from "../../../../hooks/useNavigation";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./NavbarPortfolio.scss";

function NavbarPortfolio() {
  const { changePage } = useNavigation();

  return (
    <div id="navbarPortfolio">
      <Navbar collapseOnSelect expand="md">
        <Container>
          <div className="d-md-none d-inline-flex align-items-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <span className="ms-2">
              <h1>Sommaire</h1>
            </span>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link
                href="#skills"
                onClick={(e) => changePage(e, "", "skills")}
              >
                <img src="/icons/tools.png" alt="Compétences" /> Compétences
              </Nav.Link>
              <Nav.Link
                href="#experiences"
                onClick={(e) => changePage(e, "", "experiences")}
              >
                <img src="/icons/suitcase.png" alt="Expériences" /> Expériences
              </Nav.Link>
              <Nav.Link
                href="#formation"
                onClick={(e) => changePage(e, "", "formation")}
              >
                <img src="/icons/school.png" alt="Formation" /> Formation
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={(e) => changePage(e, "", "projects")}
              >
                <img src="/icons/site.png" alt="Projets" /> Projets
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarPortfolio;
