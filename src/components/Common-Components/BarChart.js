import React from "react";
import "./BarChart.css";

const BarChart = ({ data }) => {
  // Generate random colors for the bars
  const colors = Array.from(
    { length: data },
    (_, i) => `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`
  );

  return (
    <div className="bar-chart">
      {Array.from({ length: data }, (_, i) => (
        <div
          key={i}
          className="bar"
          style={{
            backgroundColor: colors[i],
            height: `${(data / 1000000) * 100}%`,
          }}
        >
          <span>{data}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
