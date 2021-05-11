import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import PortfolioUI from "./pages/PortfolioUI";
import Login from "./components/User/Login/Login";
import SideBar from "./components/Admin/SideBar/SideBar";
import EducationAdmin from "./pages/EducationAdmin";
import { ToastContainer } from "react-toastify";
import history from "./shared/history";
import SecureRoute from "./shared/SecureRoute";
import ExperienceAdmin from "./pages/ExperienceAdmin";
import SkillAdmin from "./pages/SkillAdmin";
import MessageAdmin from "./pages/MessageAdmin";
import isLogin from "./shared/authorization";
import ProjectAdmin from "./pages/ProjectAdmin";
import NotFound from "./pages/NotFound";

function App() {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  return (
    <div className="App">
      <Router history={history}>
        {isLogged && <SideBar />}
        <Switch>
          <Route path="/login" exact component={Login} />
          <SecureRoute path="/education" exact component={EducationAdmin} />
          <SecureRoute path="/experience" exact component={ExperienceAdmin} />
          <SecureRoute path="/project" exact component={ProjectAdmin} />
          <SecureRoute path="/skill" exact component={SkillAdmin} />
          <SecureRoute path="/messages" exact component={MessageAdmin} />
          <Route path="/" exact component={PortfolioUI} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
