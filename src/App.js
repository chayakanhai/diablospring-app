import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";
import DemoDetails from "./components/demos/demoDetails";
import SignUp from "./components/auth/signUp";
import SignIn from "./components/auth/signIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/demo/:id" component={DemoDetails} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
