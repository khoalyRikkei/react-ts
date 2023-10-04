import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { routes } from "../routes";

function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes.map((route, i) => (
              <Nav.Link href={route.path} key={i}>
                {route.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
