import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./header.css";
import GitHub from "../../images_icons/github";
import LinkedIn from "../../images_icons/linkedin";
import Instagram from "../../images_icons/Instagram";

function Hero() {
  return (
    <Container className="hero-container">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">
          <GitHub />
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          <LinkedIn />
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <Instagram />
        </Nav.Link>
      </Nav>
      <Nav className="hero-text">
        <div>
          <h1>Angel Soto</h1>
          <h3>Full-stack web Developer/ Digital Designer</h3>
        </div>
      </Nav>
    </Container>
  );
}

export default Hero;
