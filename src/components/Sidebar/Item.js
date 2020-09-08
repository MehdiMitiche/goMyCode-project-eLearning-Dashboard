import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ text, img, to }) => {
  return (
    <NavLink to={to} exact className="sidebar-item">
      <div className="sidebar-logo">
        <img src={img} alt="home" width="30" height="30" />
      </div>
      <div className="sidebar-text">{text}</div>
    </NavLink>
  );
};

export default Item;
