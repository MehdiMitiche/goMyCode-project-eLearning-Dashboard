import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import SearchInput from "../../components/SearchInput";
import "./courses.css";
import CustomizedButton from "../../components/CustumizedButton";
import { useHistory } from "react-router-dom";

const Courses = () => {
  const history = useHistory();
  return (
    <div className="center">
      <ScreenHeader title="Courses" />
      <SearchInput placeholder="search" />
      <div className="add-course-container">
        <CustomizedButton
          onClick={() => history.push("/addNewCourse")}
          text="Add New Course"
        />
      </div>
    </div>
  );
};

export default Courses;
