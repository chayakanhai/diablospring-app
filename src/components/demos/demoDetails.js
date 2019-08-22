import React from "react";

const DemoDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section demo-details">
      <div className="card z-depth-0">
        <div className="card-content red lighthen">
          <span className="card-title">Demo Title - {id}</span>
          <p>
            Ut dolore amet minim nostrud pariatur ad enim exercitation sit non.
            Aute esse dolor duis reprehenderit laboris officia aliquip veniam et
            aliquip est. Fugiat amet minim ut exercitation commodo ipsum
            laboris.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Jane Doe Producer</div>
          <div>22th August, 8am</div>
        </div>
      </div>
    </div>
  );
};

export default DemoDetails;
