import firebase from "../../config/fbConfig";
//import { getFirebase } from "react-redux-firebase"; werkt niet meer in nieuwe API

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

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCES" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            dateOfBirth: newUser.dateOfBirth,
            phoneNumber: newUser.phoneNumber,
            country: newUser.country,
            companyName: newUser.companyName
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCES" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
