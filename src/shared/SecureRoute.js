import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const SecureRoute = (props) => {
  const isLogged = useSelector((state) => state.login.isLogin);
  return (
    <Route
      path={props.path}
      render={(data) =>
        isLogged ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default SecureRoute;
