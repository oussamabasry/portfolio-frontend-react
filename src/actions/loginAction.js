import { loginApi } from "../apis/userApi";
import { toastSuccess, toastError } from "../shared/toast";
import history from "../shared/history";
import { setAuthorizationToken } from "../apis/serverApi";
import axios from "axios";
import api from "../apis/serverApi";

export const loginUser = (authData) => async (dispatch) => {
  try {
    const { data } = await loginApi(authData);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
   // localStorage.setItem("token", data.token);
    toastSuccess("Login Successfully");
    dispatch({
      type: "SIGN_IN",
      payload: { isLogin: true, token: data.token },
    });
    history.push("/products");
  } catch (error) {
    console.log(error);
    toastError("Incorrect email or password");
  }
};

export const logoutUser = () => {
   localStorage.setItem("token", null);
  ///setAuthorizationToken(false);
  return {
    type: "LOGOUT",
    payload: { isLogin: false, token: null },
  };
};
