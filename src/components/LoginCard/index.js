import React from "react";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginCard = ({
  onFinish,
  onChangeForm,
  email,
  password,
  error,
  loading,
}) => {
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
          onChange={(event) => onChangeForm("email", event.target.value)}
        />
        <Input
          type="password"
          value={password}
          style={{ marginTop: 30, height: 50 }}
          size="large"
          placeholder="password"
          prefix={<LockOutlined />}
          onChange={(event) => onChangeForm("password", event.target.value)}
        />
        <div className="login-err">{error}</div>
        <div className="forget-pswd">Forgotten Password ?</div>
        <div className="login-btn">
          <Button
            loading={loading}
            onClick={() => {
              onFinish();
            }}
          >
            Login
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LoginCard;
