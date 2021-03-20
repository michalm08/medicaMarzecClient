import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import handleReducer from "./handleReducer";

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  handle:handleReducer
});

export default rootReducer;
