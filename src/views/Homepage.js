// Dependencies
import Container from "react-bootstrap/Container";
import React, { useState, useRef, useEffect } from "react";
import "./Homepage.css";

// Components
import NavbarEl from "../components/header/nav";
import Hero from "../components/header/hero";
import Lava from "../components/main/Lava";
import Aboutme from "../components/main/Aboutme";
import Lava2 from "../components/main/Lava2";
import Skills from "../components/main/Skills";
import Education from "../components/main/Education";
import Projects from "../components/main/Projects";
import Contact from "../components/footer/Contact";
import Map from "../components/footer/Map";

function Homepage() {
  const FadeInSection = ({ children }) => {
    const domRef = React.useRef();

    const [isVisible, setVisible] = React.useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        // There's only one element to observe
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this
          setVisible(true);
          // No need to keep observing
          observer.unobserve(domRef.current);
        }
      });

      observer.observe(domRef.current);

      return () => observer.disconnect();
    }, []);

    return (
      <section
        ref={domRef}
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        {children}
      </section>
    );
  };

  return (
    <div className="app-container">
      <Container>
        <div className="toast-container">
          <p className="toast-text">
            {`Yay! , your message was sent. \n I will respond as soon as I
            see it.`}
          </p>
        </div>
        <div className="header-container">
          <div className="box-container">
            <NavbarEl />
            <FadeInSection>
              <Hero />
            </FadeInSection>
          </div>
          <Lava />
        </div>
        <div className="header-container flex-row-reverse">
          <div className="box-container">
            <FadeInSection>
              <Aboutme />
            </FadeInSection>
          </div>
          <Lava2 />
        </div>
        <div className="header-container">
          <FadeInSection>
            <Skills />
          </FadeInSection>
          <FadeInSection>
            <Education />
          </FadeInSection>
        </div>
        <div className="header-container margin-bottom">
          <div className="box-container">
            <FadeInSection>
              <Projects />
            </FadeInSection>
          </div>
          <Lava />
        </div>
        <FadeInSection>
          <Contact />
          <Map />
        </FadeInSection>
      </Container>
    </div>
  );
}

export default Homepage;
