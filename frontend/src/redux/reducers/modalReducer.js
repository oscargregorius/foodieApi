const initialState = {
  openModal: false,
  openDrawer: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "openModal":
      return { ...state, openModal: !state.openModal };
    case "openDrawer":
      return { ...state, openDrawer: !state.openDrawer };
    default:
      return state;
  }
};

export default modalReducer;
