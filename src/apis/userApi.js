import api from "./serverApi";

export const loginApi = (authData) => {
  return api.post("/users/login", authData);
};


