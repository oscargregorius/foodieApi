const initialState = {};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "food":
      return { ...state, food: action.payload };
    case "drinks":
      return { ...state, drinks: action.payload };
    case "sides":
      return { ...state, sides: action.payload };
    default:
      return state;
  }
};

export default foodReducer;
