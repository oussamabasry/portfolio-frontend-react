import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="foot text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold title">
              Oussama Basry
            </h5>
            <p className="sub-title">My Portfolio</p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold title">
              Liens
            </h5>
            <p className="link-hover">
              <a
                href="#"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Home
              </a>
            </p>
            <p className="link-hover">
              <a href="#" className="sub-title">
                {" "}
                Projects
              </a>
            </p>
            <p className="link-hover">
              <a
                href="#"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                Contact
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 sub-title">
            <h5 className="text-uppercase mb-4 font-weight-bold title">
              Contact
            </h5>
            <p>Morocco, Casablanca, Mohammedia</p>
            <p>obasry@gmail.com</p>
            <p>+212 6 50 56 38 27</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              {" "}
              Copyright ©2021 All rights reserved by:
              <a href="#" style={{ textDecoration: "none" }}>
                <strong className="title link-hover"> Oussama Basry</strong>
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/ousamabasry"
                    target="_blank"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-facebook-f icons-color"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/basry_oussama"
                    target="_blank"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-twitter icons-color"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/oussama-basry/"
                    target="_blank"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-linkedin-in icons-color"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
