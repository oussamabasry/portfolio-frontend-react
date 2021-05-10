import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject } from "../actions/projectAction";
import ProjectModal from "../components/Admin/ProjectModal";
import Table from "../components/Admin/Table";

function ProjectAdmin() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = useState({
    title: "",
    description: "",
    technologies: "",
    link: "",
    projectImage: "",
  });

  const ondelteClick = (project) => {
    dispatch(deleteProject(project._id));
  };

  const onEditClick = (data) => {
    setSelectedProject(data);
  };

  return (
    <div className="container">
      <Table
        ondelteClick={ondelteClick}
        onEditClick={onEditClick}
        idModalAdd="addProject"
        idModalEdit="editProject"
        title="Project"
        headerText={["Title", "Technologies", "Image"]}
        headerProprities={["title", "technologies", "projectImage"]}
        tableData={projects}
      />

      <ProjectModal
        id="addProject"
        header="Add Project"
        proj={deleteProject}
        submitValue="Add Project"
        colorButton="success"
      />
      <ProjectModal
        id="editProject"
        header="Edit Project"
        proj={selectedProject}
        submitValue="Edit Project"
        colorButton="warning"
      />
    </div>
  );
}

export default ProjectAdmin;
