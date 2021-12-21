import axios from "axios";

export const fetchMenu = (dispatch) => {
  axios.get("/rest/menu").then((data) => {
    dispatch({ type: "menuItems", payload: data.data });
  });
};
