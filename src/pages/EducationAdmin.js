import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEducation } from "../actions/educationAction";
import EducationModal from "../components/Admin/EducationModal";
import Table from "../components/Admin/Table";

function EducationAdmin() {
  const educations = useSelector((state) => state.educations);
  const dispatch = useDispatch();
  const [selectedEduca, setSelectedEduca] = useState({
    title: "",
    school: "",
    city: "",
    startDate: "",
    endDate: "",
  });

  const ondelteClick = (education) => {
    dispatch(deleteEducation(education._id));
  };

  const onEditClick = (data) => {
    setSelectedEduca(data);
  };

  return (
    <div className="container">
      <Table
        ondelteClick={ondelteClick}
        onEditClick={onEditClick}
        idModalAdd="addEducation"
        idModalEdit="editEducation"
        title="Education"
        headerText={["Title", "School", "City", "Start Date", "End Date"]}
        headerProprities={["title", "school", "city", "startDate", "endDate"]}
        tableData={educations}
      />

      <EducationModal
        id="addEducation"
        header="Add Education"
        edu={selectedEduca}
        submitValue="Add"
        colorButton="success"
      />
      <EducationModal
        id="editEducation"
        header="Edit Education"
        edu={selectedEduca}
        submitValue="Edit"
        colorButton="warning"
      />
    </div>
  );
}

export default EducationAdmin;
