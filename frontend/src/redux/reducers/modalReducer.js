const initialState = {
  openModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "openModal":
      return { ...state, openModal: !state.openModal };
    default:
      return state;
  }
};

export default modalReducer;
