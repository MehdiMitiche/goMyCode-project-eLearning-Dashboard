import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Routes from "../../Routes";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes />
    </div>
  );
};

export default Dashboard;
