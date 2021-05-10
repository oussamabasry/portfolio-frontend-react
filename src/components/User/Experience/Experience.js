import React, { useEffect } from "react";
import experienceImage from "../../../assets/images/experience.png";
import { useSelector, useDispatch } from "react-redux";
import { getExperiences } from "../../../actions/experienceAction";
import moment from "moment";

const Experience = ({ reff }) => {
  const experiences = useSelector((state) => state.experiences);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExperiences());
  }, [dispatch]);

  const experience = experiences.map((exp) => {
    return (
      <div key={exp._id} className="col-lg-12">
        <div className="row">
          <div className="col-xl-10 col-md-11 col-10 ms-5 ">
            <p className="fw-bold mb-2" style={{ fontSize: "19px" }}>
              {exp.title}
            </p>
            <p className="mb-3 text-primary" style={{ fontSize: "14px" }}>
              {exp.company}, {exp.city}
            </p>
            <p className="grey-text" style={{ fontSize: "13px" }}>
              {moment(exp.startDate).format("MMM YYYY")} -{" "}
              {moment(exp.endDate).format("MMM YYYY")}
            </p>
            <p className="grey-text" style={{ fontSize: "13px" }}>
              {exp.description}
            </p>
            <p
              className="mb-3 fw-bold"
              style={{
                fontSize: "14px",
                color: "#55107E",
                display: "inline",
              }}
            >
              Technologies:
            </p>
            <p className="d-inline" style={{ fontSize: "13px" }}>
              {" "}
              {exp.technologies}
            </p>
            <hr className="mb-4" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      ref={reff}
      id="experience"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Experience
        </h2>

        <div className="row">
          <div className="col-lg-5 col-md-12 text-center text-lg-left">
            <img
              className="img-fluid mb-5 d-none d-lg-inline"
              src={experienceImage}
              alt="experience"
            />
          </div>

          <div className="col-lg-7 mt-4">
            <div className="row mb-3">{experience}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
