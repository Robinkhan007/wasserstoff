import { Link } from "@mui/material";
import React from "react";

function TopBar() {
  return (
    <div
      className="topbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div className="company-name">WASSERSTOFF</div>
      <input
        type="text"
        placeholder="Search"
        className="search-field"
        style={{ marginLeft: "10px", marginRight: "10px" }} // Adding margins to the search field
      />
      <div className="options">
        {/* Adding margin to the options */}
        <Link
          to="#"
          className="option"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          Statistics
        </Link>
        <Link
          to="#"
          className="option"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          Overview
        </Link>
        <Link
          to="#"
          className="option"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          Dashboard
        </Link>
        <Link
          to="#"
          className="option"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          Analytics
        </Link>
      </div>
      <div className="icons">
        <span className="user-icon">👤</span>
        <span className="menu-icon">☰</span>
      </div>
    </div>
  );
}

export default TopBar;
