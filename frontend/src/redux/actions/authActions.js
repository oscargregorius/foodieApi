import axios from "axios";

export const loginUser = (dispatch, user) => {
  axios({
    method: "post",
    url: "/rest/login",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(user),
  }).then((data) => {
    if (data.data?.status) {
      return;
    }
    dispatch({ type: "login", payload: data.data });
  });
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
