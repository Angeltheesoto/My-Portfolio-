// Dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// Components
import NavbarEl from "./components/header/nav";
import Hero from "./components/header/hero";
import Lava from "./components/main/Lava";
import Skills from "./components/main/Skills";
import Education from "./components/main/Education";
import Contact from "./components/footer/Contact";
import Map from "./components/footer/Map";

function App() {
  return (
    <div className="App">
      {
        <>
          <NavbarEl />
          <Hero />
          <Lava />
          <Skills />
          <Education />
          <Contact />
          <Map />
        </>
      }
    </div>
  );
}

export default App;
