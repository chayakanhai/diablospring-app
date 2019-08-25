import authReducer from "./authReducer";
import demoReducer from "./demoReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  demo: demoReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
