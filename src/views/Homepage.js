// Dependencies
import Container from "react-bootstrap/Container";

// Components
import NavbarEl from "../components/header/nav";
import Hero from "../components/header/hero";
import Lava from "../components/main/Lava";
import Aboutme from "../components/main/Aboutme";
import Lava2 from "../components/main/Lava2";
import Skills from "../components/main/Skills";
import Education from "../components/main/Education";
import Contact from "../components/footer/Contact";
import Map from "../components/footer/Map";

function Homepage() {
  return (
    <div className="app-container">
      <Container>
        <div className="header-container">
          <div className="box-container">
            <NavbarEl />
            <Hero />
          </div>
          <Lava />
        </div>
        <div className="header-container flex-row-reverse">
          <div className="box-container">
            <Aboutme />
          </div>
          <Lava2 />
        </div>
        <div className="header-container">
          <Skills />
          <Education />
        </div>
        <Contact />
        <Map />
      </Container>
    </div>
  );
}

export default Homepage;
