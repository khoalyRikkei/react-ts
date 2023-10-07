import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { routes } from "../routes";

interface Props {
  onShow: Function;
}
function Header(props: Props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-between " style={{ width: "100%" }}>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <div className="navbar-nav">
              {routes.map((item) => (
                <Nav.Link href={item.path}>{item.title}</Nav.Link>
              ))}
            </div>
            <div className="justify-content-end">
              <Button
                variant="primary"
                onClick={() => props.onShow(true, "login")}
                className="me-2"
              >
                Login
              </Button>
              <Button
                variant="primary"
                onClick={() => props.onShow(true, "register")}
              >
                Register
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
