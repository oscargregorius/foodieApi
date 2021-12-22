const initialState = {};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "menuItems":
      return { ...state, menuitems: action.payload };
    case "menuItem":
      return { ...state, menuitem: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
