const loggedReducer = (
  state = { isLogin: localStorage.getItem("isLogged"), token: localStorage.getItem("token") },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLogin: action.payload.isLogin,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: action.payload.isLogin,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default loggedReducer;
