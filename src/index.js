import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
//import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
//import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import fbConfig from "./config/fbConfig";
import firebase from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: "users",
      attachAuthIsReady: true
    })
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

//trying to fix mygration problems API, but didn't work so fixed it with import from fbConfig
/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))));

const rrfConfig = {
userProfile: 'users',
attachAuthIsReady: true,
useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
const rrfProps = {
firebase,
config: rrfConfig,
dispatch: store.dispatch,
createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(

<ReactReduxFirebaseProvider {...rrfProps}>
<App/>
</ReactReduxFirebaseProvider>,
document.getElementById('root')

);*/
