import React, { useState } from "react";
import "../Navbar/styles.css";
import logo from "../../../assets/images/basry-logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ onLinkClick }) => {
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
        <Link className="navbar-brand" to="/">
          <img alt="logo" src={logo} width="100" />
        </Link>
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
              <Link
                onClick={() => onLinkClick("homeSection")}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("aboutSection")}
                className="nav-link"
                to="/"
                data-offset="90"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("educationSection")}
                className="nav-link"
                to="/"
                data-offset="90"
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("experienceSection")}
                className="nav-link"
                to="/"
                data-offset="90"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => onLinkClick("skillSection")}
                className="nav-link"
                data-offset="30"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("projectSection")}
                className="nav-link"
                to="/"
                data-offset="90"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("contactSection")}
                className="nav-link"
                data-offset="90"
                to="/"
              >
                Contact
              </Link>
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
