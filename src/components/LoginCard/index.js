import React, { useState } from "react";
import { Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginCard = ({ onFinish }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    emailError: null,
    passwordError: null,
  });

  return (
    <div className="login-card-container">
      <div className="login-card-header">Login</div>
      <div className="login-card-form">
        <Input
          value={email}
          style={{ marginTop: 30, height: 50 }}
          size="large"
          placeholder="email"
          prefix={<UserOutlined />}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="login-err">{errors.emailError}</div>
        <Input
          type="password"
          value={password}
          style={{ marginTop: 30, height: 50 }}
          size="large"
          placeholder="password"
          prefix={<LockOutlined />}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="login-err">{errors.passwordError}</div>
        <div className="forget-pswd">Forgotten Password ?</div>
        <div className="login-btn">
          <button
            onClick={() => {
              if (!email)
                return setErrors((state) => {
                  return { ...state, emailError: "Email should not be empty" };
                });
              if (!password)
                return setErrors((state) => {
                  return {
                    ...state,
                    passwordError: "Password should not be empty",
                  };
                });
              console.log(email, password);
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LoginCard;
