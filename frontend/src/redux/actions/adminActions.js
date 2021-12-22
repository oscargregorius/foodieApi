import axios from "axios";

export const getUsers = (dispatch) => {
  axios.get("/users").then((data) => {
    dispatch({ type: "users", payload: data.data });
  });
};
