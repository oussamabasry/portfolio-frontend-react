import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEducation, updateEducation } from "../actions/educationAction";
import moment from "moment";
import AddEducation from "../components/Admin/AddEducation";

function EducationAdmin() {
  const educations = useSelector((state) => state.educations);
  const dispatch = useDispatch();

  const educationsRows = educations.map((edu) => {
    return (
      <tr className="p-4" key={edu._id}>
        <td>{edu.title}</td>
        <td>{edu.school}</td>
        <td>{moment(edu.startDate).format("MMM YYYY")}</td>
        <td>{moment(edu.endDate).format("MMM YYYY")}</td>
        <td>
          <button
            type="button"
            class="btn btn-danger shadow-none"
            onClick={() => dispatch(deleteEducation(edu._id))}
          >
            Delete
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-warning shadow-none">
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
      <AddEducation />
    </div>
  );
}

export default EducationAdmin;
