import React from "react";
import Contacts from "../components/User/Contacts/Contacts";
import Education from "../components/User/Education/Education";
import Experience from "../components/User/Experience/Experience";
import Footer from "../components/User/Footer/Footer";
import PageIntro from "../components/User/PageIntro/PageIntro";
import Projects from "../components/User/Projects/Projects";
import Skills from "../components/User/Skills/Skills";

const PortfolioUI = () => {
  return (
    <div>
      <PageIntro />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default PortfolioUI;
