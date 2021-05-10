import React from "react";
import profil from "../../../assets/images/profil.png";
import "./About.css";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          About Me
        </h2>

        <div className="row">
          <div className="d-flex justify-content-center">
            <img src={profil} alt="profil" />
          </div>
          <div className="col-11 col-md-8 mx-auto mt-3">
            <p className="text-font text-justify">
              I am an engineering student in the second year of Software
              Engineering and Distributed Computer Systems (GLSID) at the Ecole
              Normale Supérieure d'Education Technique - Mohammedia (ENSET-M).
              Through my university studies, I acquired strong skills in the
              field of software engineering. The various projects that I have
              carried out as well as the internships I have completed have
              enabled me to develop not only my know-how but also my
              interpersonal skills. Motivated, I know how to adapt, I have a
              sense of responsibility and organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
