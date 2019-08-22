import authReducer from "./authReducer";
import demoReducer from "./demoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  demo: demoReducer
});

export default rootReducer;
