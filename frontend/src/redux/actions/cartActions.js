import axios from "axios";

export const addCart = (userId) => {
  let isAddedCart;
  axios({
    method: "POST",
    url: "/rest/addCart",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(userId),
  }).then((data) => {
    if (data.data?.status === "Cart already exists") {
      isAddedCart = false;
      return;
    }
    isAddedCart = true;
    return;
  });
};

export const getCart = (dispatch, userId) => {
  axios
    .get("/rest/getCart/" + userId)
    .then((data) => dispatch({ type: "getCart", payload: data.data }));
};

export const getCartItems = (dispatch, id) => {
  axios.get("/rest/getCartItems/" + id).then((data) => {
    dispatch({ type: "cartItems", payload: data.data });
  });
};

export const addToCart = (cartItem) => {
  let isAddedToCart;
  axios({
    method: "POST",
    url: "/rest/addToCart",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(cartItem),
  }).then((data) => {
    if (data.data?.error) {
      isAddedToCart = false;
      return;
    }
    isAddedToCart = true;
    return;
  });
};
