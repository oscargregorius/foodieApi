const initialState = [];

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "menuItems":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default menuReducer;
