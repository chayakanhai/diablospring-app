import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">Drop Demo</NavLink>
      </li>
      <li>
        <NavLink to="/demo/:id">Download Demo</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>

      <li>
        <NavLink to="/" className="btn btn-floating red lighten-1">
          JD
        </NavLink>
      </li>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
