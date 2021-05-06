import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getprojects } from "../../../actions/projectAction";
import ModalImage from "react-modal-image";

const Projects = () => {
  const domainName = "http://localhost:8000/";

  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch]);

  const project = projects.map((proj) => {
    return (
      <div
        key={proj._id}
        class="col-lg-3 col-11 mb-lg-0 mb-4 mt-5 p-3 me-5 ms-4 py-5 shadow-lg bg-white rounded"
      >
        <div class="view overlay rounded z-depth-1">
          <ModalImage
            small={domainName + proj.projectImage}
            large={domainName + proj.projectImage}
            alt={proj.title}
          />

          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        <div class="card-body pb-0">
          <h4 class="font-weight-bold my-3">{proj.title}</h4>
          <p class="grey-text">{proj.description}</p>
          <p
            class="mb-3 fw-bold"
            style={{
              fontSize: "14px",
              color: "#55107E",
              display: "inline",
            }}
          >
            Technologies:
          </p>
          <p style={{ fontSize: "12px" }}> {proj.technologies}</p>
          {proj.haveLink ? (
            <a
              class="btn btn-primary btn-sm shadow-none"
              target="_blank"
              href={proj.link}
            >
              <i class="fa fa-clone left"></i> View project code
            </a>
          ) : (
            <a></a>
          )}
        </div>
      </div>
    );
  });

  return (
    <section
      id="projects"
      class="text-center py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container">
        <h2 class="h1-responsive font-weight-bold mb-5">Projects</h2>

        <div class="row text-center d-inline-flex">{project}</div>
      </div>
    </section>
  );
};

export default Projects;
