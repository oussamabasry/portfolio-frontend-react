import React, { useEffect, useState } from "react";
import educationImage from "../../../education.png";
import { useSelector, useDispatch } from "react-redux";
import { getEducations } from "../../../actions/educationAction";
import moment from "moment";

const Education = () => {
  const dispatch = useDispatch();
  const educations = useSelector((state) => state.educations);

  useEffect(() => {
    dispatch(getEducations());
  }, [dispatch]);

  const education = educations.map((edu) => {
    return (
      <div key={edu._id} class="col-xl-10 col-md-11 col-10 mx-5" key={edu._id}>
        <p class="fw-bold mb-3" style={{ fontSize: "19px" }}>
          {edu.title}
        </p>
        <p class="mb-3 text-primary" style={{ fontSize: "14px" }}>
          {edu.school}, {edu.city}
        </p>
        <p class="grey-text" style={{ fontSize: "13px" }}>
          {moment(edu.startDate).format("MMM YYYY")} -{" "}
          {moment(edu.endDate).format("MMM YYYY")}
        </p>
        <hr className="mb-4" />
      </div>
    );
  });

  return (
    <section id="education" class="py-5" style={{ backgroundColor: "#fff" }}>
      <div class="container">
        <h2 class="h1-responsive font-weight-bold text-center mb-5">
          Education
        </h2>

        <div class="row">
          <div class="col-lg-5 col-md-12 text-center text-lg-left">
            <img
              class="img-fluid mb-3"
              src={educationImage}
              alt="Sample image"
            />
          </div>

          <div class="col-lg-7">
            <div class="row mb-3">{education}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
