import React, { Component } from "react";
import Notifications from "./notifications";
import DemoList from "../demos/demoList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <DemoList />
          </div>
          <div className="col s12 m5 offset-m1" />
          <Notifications />
        </div>
      </div>
    );
  }
}

export default Dashboard;
