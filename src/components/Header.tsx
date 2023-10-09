import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { publicRouter } from "../routes";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">My Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {publicRouter.map((route, i) => {
              if (route.children) {
                return (
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to={route.path}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {route.title}
                    </NavLink>
                    <ul className="dropdown-menu">
                      {route.children.map((item, i) => (
                        <li key={i}>
                          <NavLink
                            to={route.path + "/" + item.path}
                            style={activeLink}
                            className="dropdown-item"
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li className="nav-item">
                  <NavLink
                    to={route.path}
                    style={activeLink}
                    className="nav-link"
                  >
                    {route.title}
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function activeLink({ isActive }: { isActive: boolean }) {
  return { color: isActive ? "orange" : "black" };
}
export default Header;
