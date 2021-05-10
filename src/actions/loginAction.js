import { loginApi } from "../apis/userApi";
import { toastSuccess, toastError } from "../shared/toast";
import history from "../shared/history";
import api from "../apis/serverApi";

export const loginUser = (authData) => async (dispatch) => {
  try {
    const { data } = await loginApi(authData);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: data.token,
        isLogged: true,
      })
    );
    toastSuccess("Login Successfully");
    dispatch({
      type: "SIGN_IN",
      payload: { isLogin: true, token: data.token },
    });
    history.push("/education");
  } catch (error) {
    console.log(error);
    toastError("Incorrect email or password");
  }
};

export const logoutUser = () => {
  delete api.defaults.headers.common["Authorization"];
  localStorage.setItem(
    "userData",
    JSON.stringify({
      token: null,
      isLogged: false,
    })
  );
  return {
    type: "LOGOUT",
    payload: { isLogin: false, token: null },
  };
};
