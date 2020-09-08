import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
