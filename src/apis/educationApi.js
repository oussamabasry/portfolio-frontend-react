import api from "./serverApi";

export const addEducationApi = (education) => {
  return api.post("/educations/", education);
};

export const getEducationsApi = () => {
  return api.get("/educations/");
};

export const deleteEducationApi = (educationId) => {
  return api.delete(`/educations/${educationId}`);
};

export const updateEducationApi = (educationId, education) => {
  return api.put(`/educations/${educationId}`, education);
};
