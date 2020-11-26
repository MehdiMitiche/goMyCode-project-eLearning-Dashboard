import React from "react";
import { Button } from "antd";

const CustomizedButton = ({ text, onClick }) => {
  return (
    <Button
      type="primary"
      size="large"
      style={{ width: "20%", height: "50px", margin: 0 }}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
};

export default CustomizedButton;
