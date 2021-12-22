const initialState = {};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users":
      return { ...state, users: action.payload }
    default:
      return state;
  }
};

export default adminReducer;