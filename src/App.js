import React from "react";
// Components
import SideMenu from "./components/sideMenu";
import About from "./components/about/About";
import Awards from "./components/awards/Awards";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import ContactForm from "./components/contactForm/ContactForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="container-fluid p-0">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Awards />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
