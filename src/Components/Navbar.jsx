import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { HouseFill } from "react-bootstrap-icons";
import { FolderFill } from "react-bootstrap-icons";
import { PenFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";

const NavigationMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="pink" variant="dark">
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Tangerine",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          AMajola
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/Asanda-Majola/">
              <HouseFill /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="projects">
              <FolderFill /> Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="blogs">
              <PenFill /> Blogs
            </Nav.Link>
            <Nav.Link as={NavLink} to="contact">
              <PersonFill /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
