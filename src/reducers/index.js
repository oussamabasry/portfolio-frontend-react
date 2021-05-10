import loggedReducer from "./isLogged";
import educationReducer from "./education";
import experienceReducer from "./experience";
import skillReducer from "./skill";
import projectReducer from "./project";
import messageReducer from "./message";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  educations: educationReducer,
  experiences: experienceReducer,
  skills: skillReducer,
  projects: projectReducer,
  messages: messageReducer,
  login: loggedReducer,
});

export default allReducers;
