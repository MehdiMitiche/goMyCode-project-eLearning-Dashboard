import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const SearchInput = ({
  placeholder,
  onChange = () => {
    console.log("changed");
  },
  value,
}) => {
  return (
    <div className="students-search-container">
      <Input
        size="large"
        placeholder={placeholder}
        onChange={onChange}
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

export default SearchInput;
