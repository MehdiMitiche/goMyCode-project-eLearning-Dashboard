import React from "react";
import { isLoggedIn } from "../auth";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ Component, path }) => {
  return isLoggedIn() ? (
    <Route path={path}>
      <Component />
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
