import { combineReducers } from "redux";
import menuReducer from "./reducers/menuReducer";
import modalReducer from "./reducers/modalReducer";
import authReducer from "./reducers/authReducer";
import adminReducer from "./reducers/adminReducer";

export default combineReducers({
  menuReducer,
  modalReducer,
  authReducer,
  adminReducer,
});
