import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="pink" variant="dark">
      <Container>
        <Navbar.Brand>AMajola</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/Asanda-Majola/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={NavLink} to="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
