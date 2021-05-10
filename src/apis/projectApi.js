import api from "./serverApi";

export const addProjectApi = (project) => {
  return api.post("/projects/", project);
};

export const getProjectsApi = () => {
  return api.get("/projects/");
};

export const deleteProjectApi = (projectId) => {
  return api.delete(`/projects/${projectId}`);
};

export const updateProjectApi = (projectId, project) => {
  return api.put(`/projects/${projectId}`, project);
};
