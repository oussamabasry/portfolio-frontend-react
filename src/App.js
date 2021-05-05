import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useSelector, use } from "react-redux";
import "./App.css";
import PortfolioUI from "./pages/PortfolioUI";
import Login from "./components/User/Login/Login";
import SideBar from "./components/Admin/SideBar/SideBar";
import Home from "./pages/Home";
import EducationAdmin from "./pages/EducationAdmin";
import Products from "./pages/Products";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/User/Navbar/Navbar";
import history from "./shared/history";
import SecureRoute from "./shared/SecureRoute";

function App() {
  const isLogged = useSelector((state) => state.login.isLogin);

  return (
    <div className="App">
      <Router history={history}>
        {isLogged == true ? <SideBar /> : <Navbar />}
        <Switch>
          <Route path="/" exact component={PortfolioUI} />
          <Route path="/login" exact component={Login} />
          <SecureRoute path="/education" component={EducationAdmin} />
          <SecureRoute path="/products" component={Products} />
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
