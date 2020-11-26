import React from "react";
import LoginCard from "../../components/LoginCard";
import "./login.css";
import { isLoggedIn } from "../../helpers";
import { Redirect } from "react-router-dom";

const Login = () => {
  if (isLoggedIn) return <Redirect to="/" />;
  return (
    <div className="login-container">
      <div className="login-content">
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
