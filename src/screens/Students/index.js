import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import SearchInput from "../../components/SearchInput";

const Students = () => {
  return (
    <div className="center">
      <ScreenHeader title="Students" />
      <SearchInput placeholder="search" />
    </div>
  );
};

export default Students;
