import axios from "axios";

export const fetchMenu = (dispatch) => {
  axios.get("/rest/menu").then((data) => {
    dispatch({ type: "menuItems", payload: data.data });
  });
};

export const fetchMenuItem = (dispatch, id) => {
  axios({
    method: "get",
    url: "/rest/menuitem/" + id,
    headers: { "Content-Type": "application/json" },
    data: {
      id: "fdsfsd",
    },
  }).then((data) => {
    dispatch({ type: "menuItem", payload: data.data });
  });
};
