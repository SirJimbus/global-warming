import React from "react";
import "./chart.css";

const Chart = ({ description }) => {
  return (
    <div className="chart">
      <p className="chart-title">{description.title}</p>
      <p className="chart-paragraph">{description.paragraph}</p>
    </div>
  );
};

export default Chart;
