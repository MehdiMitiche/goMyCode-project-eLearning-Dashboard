import React from "react";
import "antd/dist/result.css";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <ProtectedRoute Component={Dashboard} path="/" />
    </Switch>
  );
}

export default App;
