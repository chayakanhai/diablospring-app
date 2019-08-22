import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">Drop Demo</NavLink>
      </li>
      <li>
        <NavLink to="/demo/:id">Download Demo</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating red lighten-1">
          JD
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
