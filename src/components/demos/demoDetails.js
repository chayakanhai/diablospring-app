import React from "react";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import moment from "moment";

const DemoDetails = props => {
  const { demo, auth } = props;

  if (!auth.uid) return <Redirect to="signin" />;
  if (demo) {
    return (
      <div className="container section demo-details">
        <div className="card z-depth-0">
          <div className="card-content red lighten-1">
            <span className="card-title">Demo Title - {demo.demoTitle}</span>
            <p>
              Ut dolore amet minim nostrud pariatur ad enim exercitation sit
              non. Aute esse dolor duis reprehenderit laboris officia aliquip
              veniam et aliquip est. Fugiat amet minim ut exercitation commodo
              ipsum laboris.
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{moment(demo.createdAt.toDate()).calendar()}</div>
            <i className="material-icons">cloud_download</i>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading demo...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const demos = state.firestore.data.demos;
  const demo = demos ? demos[id] : null;
  return {
    demo: demo,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "demos" }])
)(DemoDetails);
