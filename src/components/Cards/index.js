import React from "react";
import "./cards.css";

export const CardSmall = ({ icon, number, total }) => {
  return (
    <div className="small-card">
      <div className="icon">{icon}</div>
      <div className="infos">
        <div className="number">{number}</div>
        <div className="sub-info">Total {total}</div>
      </div>
    </div>
  );
};

export const CardBig = ({ title, img, creator, course }) => {
  return (
    <div className="big-card">
      <div className="title">{title}</div>

      <div className="details">
        <div className="img-details">{img}</div>
        {title === "Activity" ? (
          <div className="details-container">
            <div className="creator">Moh</div>
            <div className="course-name">Started a new Course</div>
          </div>
        ) : (
          <div className="details-container">
            <div className="creator">Introduction to JS</div>
          </div>
        )}
      </div>

      <div className="details">
        <div className="img-details">{img}</div>
        {title === "Activity" ? (
          <div className="details-container">
            <div className="creator">Mouna</div>
            <div className="course-name">Liked a new Course</div>
          </div>
        ) : (
          <div className="details-container">
            <div className="creator">Master Node JS</div>
          </div>
        )}
      </div>

      <div className="details">
        <div className="img-details">{img}</div>
        {title === "Activity" ? (
          <div className="details-container">
            <div className="creator">Younes</div>
            <div className="course-name">Created a new Course</div>
          </div>
        ) : (
          <div className="details-container">
            <div className="creator">Welcome to REACT</div>
          </div>
        )}
      </div>

      <div className="details">
        <div className="img-details">{img}</div>
        {title === "Activity" ? (
          <div className="details-container">
            <div className="creator">Mohamed</div>
            <div className="course-name">Started a new Course</div>
          </div>
        ) : (
          <div className="details-container">
            <div className="creator">Introduction to HTML</div>
          </div>
        )}
      </div>
    </div>
  );
};
