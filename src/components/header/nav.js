import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images_icons/logo";

function NavbarEl() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span className="logo">
              <Logo />
            </span>
          </Navbar.Brand>
          <img src="" alt="" />
          <Nav className="me-auto">
            <Nav.Link href="#home">About </Nav.Link>
            <Nav.Link href="#home">Skills</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarEl;
