import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExperience } from "../actions/experienceAction";
import ExperienceModal from "../components/Admin/ExperienceModal";
import Table from "../components/Admin/Table";

const ExperienceAdmin = () => {
  const experiences = useSelector((state) => state.experiences);
  const dispatch = useDispatch();
  const [selectedExperience, setSelectedExperience] = useState({
    title: "",
    company: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
    technologies: "",
  });

  const ondelteClick = (experience) => {
    dispatch(deleteExperience(experience._id));
  };

  const onEditClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className="experience">
      <div className="container">
        <Table
          ondelteClick={ondelteClick}
          idModalAdd="addExperience"
          idModalEdit="editExperience"
          onEditClick={onEditClick}
          title="Experience"
          headerText={[
            "Title",
            "Company",
            "City",
            "Start Date",
            "End Date",
            "Description",
            "Technologies",
          ]}
          headerProprities={[
            "title",
            "company",
            "city",
            "startDate",
            "endDate",
            "description",
            "technologies",
          ]}
          tableData={experiences}
        />
      </div>
      <ExperienceModal
        id="addExperience"
        header="Add Experience"
        exp={selectedExperience}
        submitValue="Add Experience"
        colorButton="success"
      />
      <ExperienceModal
        id="editExperience"
        header="Edit Experience"
        exp={selectedExperience}
        submitValue="Edit Experirnce"
        colorButton="warning"
      />
    </div>
  );
};

export default ExperienceAdmin;
