import React from "react";
import "./statsContent.css";

const StatsContent = ({ icon, number, title }) => {
  return (
    <div className="stats-content-container">
      <div className="stats-content-logo center-content">{icon}</div>
      <div className="stats-content-info">
        <div className="stats-content-num center-content">{number}</div>
        <div className="stats-content-title center-content">{title}</div>
      </div>
    </div>
  );
};

export default StatsContent;
