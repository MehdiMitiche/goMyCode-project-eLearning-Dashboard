import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import AddCourse from "../../components/AddCourse";

const AddNewCourse = () => {
  return (
    <div>
      <ScreenHeader title="Add a new Course" />
      <div>
        <AddCourse />
      </div>
    </div>
  );
};

export default AddNewCourse;
