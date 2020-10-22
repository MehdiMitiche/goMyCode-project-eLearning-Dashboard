import React from "react";
import "./activityContent.css";

const ActivityContent = ({ title, data, icon }) => {
  return (
    <div className="activity-container">
      <div className="activity-title">{title}</div>
      {data.map((elem, index) => (
        <div className="activity-item" key={index}>
          <hr />
          <div className="activity-item-content">
            <div className="activity-item-icon center-content">{icon}</div>
            <div className="activity-item-info">
              {elem.author ? (
                <div className="activity-item-author center-content">
                  {elem.author}
                </div>
              ) : null}
              <div className="activity-item-body center-content">
                {elem.body}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityContent;
