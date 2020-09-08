import React from "react";
import homeLogo from "../../assets/home.png";
import Item from "./Item";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <Item text="Dashboard" img={homeLogo} to="/" />
        <Item text="Courses" img={homeLogo} to="/courses" />
        <Item text="Students" img={homeLogo} to="/students" />
        <Item text="Teachers" img={homeLogo} to="/" />
        <Item text="Blog" img={homeLogo} to="/" />
      </div>
    </div>
  );
};

export default Sidebar;
