import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";
import { getEducations } from "./actions/educationAction";
import { getExperiences } from "./actions/experienceAction";
import { getSkills } from "./actions/skillAction";
import isLogin from "./shared/authorization";
import api from "./apis/serverApi";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));
store.dispatch(getEducations());
store.dispatch(getExperiences());
//store.dispatch(getprojects());
store.dispatch(getSkills());

if (isLogin) {
  api.defaults.headers.common["Authorization"] = `Bearer ${
    JSON.parse(localStorage.getItem("userData")).token
  }`;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
