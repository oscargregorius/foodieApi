const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cartItems":
      return { ...state, cartItems: action.payload };
    case "getCart":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
