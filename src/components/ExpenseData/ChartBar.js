import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barHeight = "0%";
  console.log(props);
  if (props.maxVal > 0) {
    barHeight = (props.value / props.maxVal) * 100 + "%";
  }

  return (
    <div className="chart-bar">
      <div className="innerBar">
        <div className="fillBar" style={{ height: barHeight }}></div>
      </div>
      <div className="monthName">{props.label}</div>
    </div>
  );
};

export default ChartBar;
