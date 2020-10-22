import React from "react";

import { Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/Home";
import StudentsScreen from "../screens/Students";
import CoursesScreen from "../screens/Courses";

const Routes = () => {
  return (
    <div className="screens-container">
      <Switch>
        <Route exact path="/students">
          <StudentsScreen />
        </Route>
        <Route exact path="/courses">
          <CoursesScreen />
        </Route>
        <Route exact path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
