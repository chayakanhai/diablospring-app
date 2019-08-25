import React from "react";
import DemoSummary from "./demoSummary";
import { Link } from "react-router-dom";

const DemoList = ({ demos }) => {
  return (
    <div className="demo-list section">
      {demos &&
        demos.map(demo => {
          return (
            <Link to={"/demo/" + demo.id} key={demo.id}>
              <DemoSummary demo={demo} />;
            </Link>
          );
        })}
    </div>
  );
};

export default DemoList;
