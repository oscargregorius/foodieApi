import axios from "axios";

export const getFood = (dispatch) => {
  axios.get("rest/food").then((data) => {
    dispatch({ type: "food", payload: data.data });
  });
};

export const getDrinks = (dispatch) => {
  axios.get("rest/drinks").then((data) => {
    dispatch({ type: "drinks", payload: data.data });
  });
};

export const getSides = (dispatch) => {
  axios.get("rest/sides").then((data) => {
    dispatch({ type: "sides", payload: data.data });
  });
};
