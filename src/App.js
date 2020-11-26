import React from "react";
import "antd/dist/result.css";
import "./App.css";
import Login from "./screens/Login";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Routes from "./Routes";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <ProtectedRoute Component={Routes} path="/" />
    </Switch>
  );
}

export default App;
