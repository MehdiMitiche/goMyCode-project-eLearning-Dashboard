import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import Card from "../../components/Card";
import StatsContent from "../../components/StatsContent";
import ActivityContent from "../../components/ActivityContent";
import "./home.css";
import { FaBook } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";

const ACTIVITY_DATA = [
  {
    author: "Mr Robot",
    body: "Created a new Node Js course",
  },
  {
    author: "Mr Robot",
    body: "Created a new Node Js course",
  },
  {
    author: "Mr Robot",
    body: "Created a new Node Js course",
  },
  {
    author: "Mr Robot",
    body: "Created a new Node Js course",
  },
];

const POPULAR_COURSES = [
  {
    body: "Crash Course For React JS",
  },
  {
    body: "Introduction To Python",
  },
  {
    body: "Introduction To Python",
  },
  {
    body: "Introduction To Python",
  },
  {
    body: "Introduction To Python",
  },
];

const Home = () => {
  return (
    <div className="center">
      <ScreenHeader title="Home" />
      <div className="home-content">
        <div className="row stats-cards-container">
          <Card>
            <StatsContent icon={<FaBook />} title="Total Courses" number="25" />
          </Card>
          <Card>
            <StatsContent
              icon={<BsFillPeopleFill />}
              title="Total Students"
              number="125"
            />
          </Card>
        </div>
        <div className="row activity-cards-container">
          <Card>
            <ActivityContent
              data={ACTIVITY_DATA}
              title="Activity"
              icon={<BsPersonSquare />}
            />
          </Card>
          <Card>
            <ActivityContent
              data={POPULAR_COURSES}
              title="Popular courses"
              icon={<FaBook />}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
