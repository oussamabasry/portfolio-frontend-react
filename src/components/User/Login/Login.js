import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../actions/loginAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="container ">
      <div className="row align-items-center vh-100">
        <div className=" col-12 col-sm-10 col-md-7 col-lg-6 bg-white mx-auto ">
          <div className="login d-flex align-items-center pb-5 pt-5">
            <div className="container">
              <div className="row ">
                <div className="col-md-12 col-lg-12 mt-4">
                  <h2 className="login-heading mb-4 text-center text-danger mb-5">
                    Login only for administrator !{" "}
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-label-group mb-4">
                      <input
                        type="text"
                        id="inputEmail"
                        className="form-control shadow-none"
                        placeholder="Email address"
                        {...register("email", {
                          required: "Email Required",
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <div className="text-danger ms-4">
                          You must enter your email
                        </div>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <div className="text-danger ms-4">
                          You must enter a valid email
                        </div>
                      )}
                    </div>

                    <div className="form-label-group mb-5">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control shadow-none"
                        placeholder="Password"
                        {...register("password", {
                          required: "Password Required",
                        })}
                      />

                      {errors.password &&
                        errors.password.type === "required" && (
                          <div className="text-danger ms-4 fs-6">
                            You must enter your password
                          </div>
                        )}
                    </div>

                    <input
                      className="btn btn-lg btn-primary btn-block shadow-none btn-login form-control text-uppercase font-weight-bold mb-2"
                      type="submit"
                      value=" Sign in"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
