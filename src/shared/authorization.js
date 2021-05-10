const auth = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user && user.isLogged) {
    return JSON.parse(localStorage.getItem("userData")).isLogged;
  }
  return false;
};

export default  auth;
