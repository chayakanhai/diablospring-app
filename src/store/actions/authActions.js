import firebase from "../../config/fbConfig";
//import { getFirebase } from "react-redux-firebase";

export const signIn = credentials => {
  return (dispatch, getState) => {
    //const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCES" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
