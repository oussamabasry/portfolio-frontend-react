import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getprojects } from "../../../actions/projectAction";
import ModalImage from "react-modal-image";
import { domainName } from "../../../apis/serverApi";

const Projects = ({ reff }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch]);

  const project = projects.map((proj) => {
    return (
      <div
        key={proj._id}
        className="col-lg-4 col-12 mb-lg-0 mb-4 mt-lg-5 py-3 shadow-lg bg-white rounded"
      >
        <div className="view overlay rounded z-depth-1">
          <ModalImage
            small={domainName + proj.projectImage}
            large={domainName + proj.projectImage}
            alt={proj.title}
          />
        </div>
        <div className="card-body pb-0">
          <h4 className="font-weight-bold ">{proj.title}</h4>
          <p className="grey-text">{proj.description}</p>
          <p
            className=" fw-bold"
            style={{
              fontSize: "14px",
              color: "#55107E",
              display: "inline",
            }}
          >
            Technologies:
          </p>
          <p style={{ fontSize: "12px" }}> {proj.technologies}</p>
          {proj.haveLink && (
            <button
              className="btn btn-primary btn-sm shadow-none mb-0"
              target="_blank"
              rel="noreferrer"
              href={proj.link}
            >
              <i className="fa fa-clone left"></i> View project code
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <section
      id="projects"
      ref={reff}
      className="text-center py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold mb-5">Projects</h2>

        <div className="row text-center d-inline-flex">{project}</div>
      </div>
    </section>
  );
};

export default Projects;
