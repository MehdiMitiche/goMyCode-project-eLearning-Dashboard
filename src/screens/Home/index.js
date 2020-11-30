import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import "./home.css";
import { CardSmall, CardBig } from "../../components/Cards";
import { FaBook } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";

const Home = () => {
  return (
    <div className="center">
      <ScreenHeader title="Home" />
      <div className="home-content">
        <div className="stats-cards-container">
          <CardSmall icon={<FaBook />} total="Courses" number="26" />
          <CardSmall icon={<FaUserAlt />} total="Users" number="133" />
        </div>
        <div className="activity-cards-container">
          <CardBig title="Activity" img={<FaUserAlt />} />
          <CardBig title="Popular Courses" img={<FaBookDead />} />
        </div>
      </div>
    </div>
  );
};

export default Home;
