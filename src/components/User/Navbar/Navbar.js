import React, { useState } from "react";
import "../Navbar/styles.css";
import logo from "../../../basry-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggler, setToggler] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    window.scrollY > window.screen.height - window.screen.height * 0.27
      ? setNavbar(true)
      : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar navbar-fixed-top py-3 ${
        navbar ? "navbar-scroll-color" : "rgba-gradient-nav"
      }`}
    >
      <div className="container-fluid mx-3">
        <a className="navbar-brand" href="#">
          <img alt="logo" src={logo} width="100" />
        </a>
        <button
          className="navbar-toggler costmusetoggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggler(!toggler)}
        >
          <i
            className={`fas ${toggler ? "fa-bars" : "fa-times"} fa-lg`}
            style={{ color: "black" }}
          ></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  smooth-scroll ms-lg-5">
            <li className="nav-item">
              <a className="nav-link" href="#intro">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" data-offset="90">
                About
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" data-offset="90">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" data-offset="90">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials" data-offset="30">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#articles" data-offset="90">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" data-offset="90">
                Contact
              </a>
            </li>
          </ul>

          <ul className="navbar-nav  ms-auto list">
            <li className="nav-item  list-item">
              <Link to="/login" className="nav-link">
                <i className="fas fa-lock mx-2"></i> Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
