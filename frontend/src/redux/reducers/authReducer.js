const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    case "whoAmI":
      return { ...state, user: action.payload[0] };
    case "logout":
      return { ...state, user: "" };
    default:
      return state;
  }
};

export default authReducer;
