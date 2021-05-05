import api from "./serverApi";

export const addExperienceApi = (experience) => {
  return api.post("/experiences/", experience);
};

export const getExperiencesApi = () => {
  return api.get("/experiences/");
};

export const deleteExperienceApi = (experienceId) => {
  return api.delete(`/experiences/${experienceId}`);
};

export const updateExperienceApi = (experienceId, experience) => {
  return api.put(`/experiences/${experienceId}`, experience);
};
