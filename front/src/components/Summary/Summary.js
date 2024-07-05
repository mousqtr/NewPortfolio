import { useNavigation } from "../../hooks/useNavigation";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Summary.scss";

function Summary({ data }) {
  const { changePage } = useNavigation();

  return (
    <div id="summary">
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
              {data.map((element) => (
                <Nav.Link
                  href={"#" + element}
                  onClick={(e) => changePage(e, "", element)}
                >
                  <img src={element.img} alt={element.label} />
                  {element.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Summary;
