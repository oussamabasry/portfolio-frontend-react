import React from "react";
import moment from "moment";
import { domainName } from "../../apis/serverApi";

function Table({
  title,
  tableData,
  headerText,
  headerProprities,
  idModalEdit,
  idModalAdd,
  ondelteClick,
  onEditClick,
}) {
  const dataRows = tableData.map((data) => {
    return (
      <tr className="p-4" key={data._id}>
        {headerProprities.map((prop, index) => {
          return (
            <td key={prop}>
              {(prop === "startDate" || prop === "endDate") &&
                moment(data[prop]).format("MMM YYYY")}
              {prop === "projectImage" && (
                <img
                  src={domainName + data[prop]}
                  alt="project"
                  width="150px"
                />
              )}
              {!(
                prop === "startDate" ||
                prop === "endDate" ||
                prop === "projectImage"
              ) && data[prop]}
            </td>
          );
        })}
        <td>
          <button
            type="button"
            className="btn btn-danger shadow-none"
            onClick={() => ondelteClick(data)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-warning shadow-none"
            data-bs-toggle="modal"
            data-bs-target={`#${idModalEdit}`}
            onClick={() => onEditClick(data)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

  const headersRow = headerText.map((head, index) => {
    return (
      <th key={index} scope="col">
        {head}
      </th>
    );
  });

  return (
    <div>
      <div className="d-flex justify-content-end mt-5 me-5">
        <h3 className="me-auto">{title}</h3>
        <button
          type="button"
          className="btn btn-success shadow-none  ms-auto"
          data-bs-toggle="modal"
          data-bs-target={`#${idModalAdd}`}
        >
          Add {title}
        </button>
      </div>

      <div className="row mt-5">
        <table className="table table-dark table-striped ">
          <thead>
            <tr>
              {headersRow}
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{dataRows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
