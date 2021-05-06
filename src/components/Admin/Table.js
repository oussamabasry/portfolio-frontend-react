import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEducation, updateEducation } from "../actions/educationAction";
import moment from "moment";
import AddEducation from "../components/Admin/EducationModal";

function Table({ tableData, headerText, headerProprities }) {
  const [selectedEduca, setSelectedEduca] = useState({
    title: "",
    school: "",
    city: "",
    startDate: "",
    endDate: "",
  });

  const dataRows = tableData.map((data) => {
    return (
      <tr className="p-4" key={data._id}>
        {headerProprities.map((data, index) => {
          <td key={index}>{data[headerProprities[index]]}</td>;
        })}
        <td>
          <button
            type="button"
            class="btn btn-danger shadow-none"
            onClick={() => dispatch(deleteEducation(data._id))}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-warning shadow-none"
            data-bs-toggle="modal"
            data-bs-target="#editEducationModal"
            onClick={() => setSelectedEduca(edu)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="education">
      <div className="container">
        <div className="d-flex justify-content-end mt-5 me-5">
          <h3 className="me-auto">EDUCATION</h3>
          <button
            type="button"
            class="btn btn-success shadow-none  ms-auto"
            data-bs-toggle="modal"
            data-bs-target="#addEducationModal"
          >
            Add Education
          </button>
        </div>

        <div class="row mt-5">
          <table class="table table-dark table-striped ">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">School</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>{educationsRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
