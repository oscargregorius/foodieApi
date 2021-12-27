import axios from "axios";

export const loginUser = async (dispatch, user) => {
  let isLoggedIn;
  await axios({
    method: "post",
    url: "/rest/login",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(user),
  }).then((data) => {
    if (data.data?.status) {
      isLoggedIn = false;
      return;
    }
    dispatch({ type: "login", payload: data.data });
  });
  return isLoggedIn;
};

export const registerUser = async (user) => {
  let isRegisteredUser;
  await axios({
    method: "post",
    url: "/user",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(user),
  }).then((data) => {
    if (data.data?.status === "user already exists") {
      isRegisteredUser = false;
      return;
    }
    isRegisteredUser = true;
  });
  return isRegisteredUser;
};

export const logoutUser = (dispatch) => {
  axios({
    method: "delete",
    url: "/rest/logout",
  }).then((data) => {
    dispatch({ type: "logout", payload: data.data });
  });
};

export const whoAmI = (dispatch) => {
  axios.get("/rest/whoAmI").then((data) => {
    if (data.data?.error) {
      return;
    }
    dispatch({ type: "whoAmI", payload: data.data });
  });
};
