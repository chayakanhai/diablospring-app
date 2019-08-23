import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var fbConfig = {
  apiKey: "AIzaSyA39EBH7U3XCgvP7N71YUKl7Ko-93zc9OY",
  authDomain: "diablospring.firebaseapp.com",
  databaseURL: "https://diablospring.firebaseio.com",
  projectId: "diablospring",
  storageBucket: "",
  messagingSenderId: "72327650349",
  appId: "1:72327650349:web:2123ad412419df45"
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore().settings({});

export default firebase;
