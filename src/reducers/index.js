import loggedReducer from "./isLogged";
import educationReducer from "./education";
import experienceReducer from "./experience";
import skillReducer from "./skill";
import projectReducer from "./project";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  educations: educationReducer,
  experiences: experienceReducer,
  skills: skillReducer,
  projects: projectReducer,
  login: loggedReducer,
});

export default allReducers;
