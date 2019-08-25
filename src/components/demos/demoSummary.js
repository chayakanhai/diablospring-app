import React from "react";
import moment from "moment";

const DemoSummary = ({ demo }) => {
  return (
    <div className="card z-depht-0 demo-summary">
      <div className="card-content black-text text-darken card-panel red lighten-1">
        <span className="card-title">{demo.demoTitle}</span>
        <p>
          Posted by {demo.producerFirstName} {demo.producerLastName}
        </p>
        <p className="grey-text">
          {moment(demo.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default DemoSummary;
