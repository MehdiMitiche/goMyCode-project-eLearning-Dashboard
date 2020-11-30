import React from "react";
import "./cards.css";
import { FaBook } from "react-icons/fa";

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
        <div className="details-container">
          <div className="creator">creator</div>
          <div className="course-name">course-name</div>
        </div>
      </div>

      <div className="details">
        <div className="img-details">{img}</div>
        <div className="details-container">
          <div className="creator">creator</div>
          <div className="course-name">course-name</div>
        </div>
      </div>

      <div className="details">
        <div className="img-details">{img}</div>
        <div className="details-container">
          <div className="creator">creator</div>
          <div className="course-name">course-name</div>
        </div>
      </div>

      <div className="details">
        <div className="img-details">{img}</div>
        <div className="details-container">
          <div className="creator">creator</div>
          <div className="course-name">course-name</div>
        </div>
      </div>
    </div>
  );
};
