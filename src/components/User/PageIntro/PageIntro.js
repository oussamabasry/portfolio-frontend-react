import React from "react";
import "./styles.css";
import homeImage from "../../../dev.png";

const PageIntro = () => {
  return (
    <div className="container">
      <div className="row">
        <div id="intro-section" className="col">
          <div className=" rgba-gradient d-flex justify-content-center align-items-center header">
            <div className="container px-md-3 px-sm-0">
              <div className="row">
                <div className="col-md-12 mb-4  text-center">
                  <h3
                    className="display-3 fw-bold  mb-0 pt-md-5 pt-5"
                    style={{ color: "#2A083F" }}
                  >
                    Full Stack Web Developper
                  </h3>
                  <hr className=" my-4 text-light" />

                  <a
                    href="#!"
                    className="btn btn-primary shadow-none py-2 px-4"
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className="col d-none d-lg-inline">
          <div className=" rgba-gradient d-flex justify-content-center align-items-center header">
            <div className="container px-md-3 px-sm-0">
              <div className="row">
                <div className="col-md-12 mb-4  text-center">
                  <img class="img-fluid" src={homeImage} alt="Sample image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIntro;
