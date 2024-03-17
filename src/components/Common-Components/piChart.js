import React, { useState, useEffect } from "react";

const ProgressCircles = ({ percentage1, percentage2 }) => {
  // States for progress percentages
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  // Update progress on percentage change
  useEffect(() => {
    setProgress1(percentage1);
    setProgress2(percentage2);
  }, [percentage1, percentage2]);

  // Calculate dash offset based on progress percentage
  const calculateOffset = (progress) => {
    const circumference = 2 * Math.PI * 40; // Circumference of the circle
    return circumference - (circumference * progress) / 100; // Dash offset calculation
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        marginTop: "150px",
      }}
    >
      {/* First progress circle */}
      <div style={{ position: "relative", width: "80px", height: "100px" }}>
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#ccc"
            strokeWidth="5"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#007bff" // Progress color
            strokeWidth="5"
            strokeDasharray="251.327" // 2 * Math.PI * radius
            strokeDashoffset={calculateOffset(progress1)}
          />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em">
            27%
          </text>
        </svg>
      </div>
      <div>
        <p>92980</p>
        <p>Active users</p>
      </div>

      {/* Second progress circle */}
      <div style={{ position: "relative", width: "80px", height: "100px" }}>
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#ccc"
            strokeWidth="5"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#ff7f0e" // Progress color
            strokeWidth="5"
            strokeDasharray="251.327" // 2 * Math.PI * radius
            strokeDashoffset={calculateOffset(progress2)}
          />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em">
            67%
          </text>
        </svg>
      </div>
      <div>
        <p>22652</p>
        <p>New Users</p>
      </div>
    </div>
  );
};

export default ProgressCircles;
