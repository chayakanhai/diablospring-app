import React from "react";
import DemoSummary from "./demoSummary";

const DemoList = ({ demos }) => {
  return (
    <div className="demo-list section">
      {demos &&
        demos.map(demo => {
          return <DemoSummary demo={demo} key={demo.id} />;
        })}
    </div>
  );
};

export default DemoList;
