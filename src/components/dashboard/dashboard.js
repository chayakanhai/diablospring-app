import React, { Component } from "react";
import Notifications from "./notifications";
import DemoList from "../demos/demoList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { demos } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <DemoList demos={demos} />
          </div>
          <div className="col s12 m5 offset-m1" />
          <Notifications />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    demos: state.demo.demos // (props) property: state in rootReducer.property in projectReducer
  };
};

export default connect(mapStateToProps)(Dashboard);
