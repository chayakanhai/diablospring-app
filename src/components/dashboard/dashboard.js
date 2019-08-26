import React, { Component } from "react";
import Notifications from "./notifications";
import DemoList from "../demos/demoList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { demos, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <DemoList demos={demos} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    demos: state.firestore.ordered.demos,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
    //demos: state.demo.demos // (props) property: state in rootReducer.property in projectReducer
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "demos" },
    { collection: "notifications", limit: 3 }
  ])
)(Dashboard);
