import axios from "axios";

export const getCartItems = (dispatch,id) => {
  axios.get("/rest/getCartItems/" + id)
    .then(data => {
      dispatch({type: "cartItems", payload: data.data})
    })
};


