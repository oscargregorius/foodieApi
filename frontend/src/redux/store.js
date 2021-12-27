import { combineReducers } from "redux";
import modalReducer from "./reducers/modalReducer";
import authReducer from "./reducers/authReducer";
import adminReducer from "./reducers/adminReducer";
import foodReducer from "./reducers/foodReducer";
import cartReducer from "./reducers/cartReducer";

export default combineReducers({
  modalReducer,
  authReducer,
  adminReducer,
  foodReducer,
  cartReducer,
});
