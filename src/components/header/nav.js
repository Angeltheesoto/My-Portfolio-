import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images_icons/logo";
import "./header.css";

function NavbarEl() {
  return (
    <>
      <Navbar className="navbar-container">
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Nav className="me-auto nav-center">
            <Nav.Link href="#about" className="text-white">
              About{" "}
            </Nav.Link>
            <Nav.Link href="#skills" className="text-white">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="text-white">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarEl;
