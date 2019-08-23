import authReducer from "./authReducer";
import demoReducer from "./demoReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    auth: authReducer,
    demo: demoReducer,
    firestore: firestoreReducer
});

export default rootReducer;