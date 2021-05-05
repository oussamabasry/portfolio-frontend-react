import React, { useState, useEffect } from "react";
import experienceImage from "../../../experience.png";
import { useSelector, useDispatch } from "react-redux";
import { getExperiences } from "../../../actions/experienceAction";
import moment from "moment";

const Experience = () => {
  const experiences = useSelector((state) => state.experiences);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExperiences());
  }, [dispatch]);

  const experience = experiences.map((exp) => {
    return (
      <div key={exp._id} class="col-lg-7">
        <div class="row mb-3">
          <div class="col-xl-10 col-md-11 col-10 ms-5 mt-5">
            <p class="fw-bold mb-3" style={{ fontSize: "19px" }}>
              {exp.title}
            </p>
            <p class="mb-3 text-primary" style={{ fontSize: "14px" }}>
              {exp.company}, {exp.city}
            </p>
            <p class="grey-text" style={{ fontSize: "13px" }}>
              {moment(exp.startDate).format("MMM YYYY")} -{" "}
              {moment(exp.endDate).format("MMM YYYY")}
            </p>
            <p class="grey-text" style={{ fontSize: "13px" }}>
              {exp.description}
            </p>
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
    <section id="about" class="pb-5" style={{ backgroundColor: "#fff" }}>
      <div class="container">
        <h2 class="h1-responsive font-weight-bold text-center mb-4">
          Experience
        </h2>
        <div class="row">
          <div class="col-lg-5 col-md-12 text-center text-lg-left">
            <img class="img-fluid" src={experienceImage} alt="Sample image" />
          </div>
          {experience}
        </div>
      </div>
    </section>
  );
};

export default Experience;
