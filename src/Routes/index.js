import React from "react";

import { Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/Home";
import StudentsScreen from "../screens/Students";
import CoursesScreen from "../screens/Courses";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InstructorScreen from "../screens/Instructors";
import AddNewCourse from "../screens/AddNewCourse";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="screens-container">
        <Switch>
          <Route exact path="/students">
            <StudentsScreen />
          </Route>
          <Route exact path="/courses">
            <CoursesScreen />
          </Route>
          <Route exact path="/instructors">
            <InstructorScreen />
          </Route>
          <Route exact path="/addNewCourse">
            <AddNewCourse />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
