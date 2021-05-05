import React, { useState, useEffect } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../actions/loginAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div class="container ">
      <div class="row align-items-center vh-100">
        <div class=" col-12 col-sm-10 col-md-7 col-lg-6 bg-white mx-auto ">
          <div class="login d-flex align-items-center pb-5 pt-5">
            <div class="container">
              <div class="row ">
                <div class="col-md-12 col-lg-12 mt-4">
                  <h2 class="login-heading mb-4 text-center text-danger mb-5">
                    Login only for administrator !{" "}
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-label-group mb-4">
                      <input
                        type="email"
                        id="inputEmail"
                        class="form-control shadow-none"
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

                    <div class="form-label-group mb-5">
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
                      class="btn btn-lg btn-primary btn-block btn-login form-control text-uppercase font-weight-bold mb-2"
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
