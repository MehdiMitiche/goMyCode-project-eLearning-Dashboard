import React from "react";
import homeLogo from "../../assets/home.png";
import personsLogo from "../../assets/group.png";
import authorsLogo from "../../assets/person.png";
import coursesLogo from "../../assets/book.png";
import "./sidebar.css";

import Item from "./Item";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <Item text="Dashboard" img={homeLogo} to="/" />
        <Item text="Courses" img={coursesLogo} to="/courses" />
        <Item text="Students" img={personsLogo} to="/students" />
        <Item text="Instructor" img={authorsLogo} to="/instructors" />
      </div>
    </div>
  );
};

export default Sidebar;
