import api from "./serverApi";

export const addSkillApi = (skill) => {
  return api.post("/skills/", skill);
};

export const getSkillsApi = () => {
  return api.get("/skills/");
};

export const deleteSkillApi = (skillId) => {
  return api.delete(`/skills/${skillId}`);
};

export const updateSkillApi = (skillId, skill) => {
  return api.put(`/skills/${skillId}`, skill);
};
