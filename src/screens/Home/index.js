import React, { useEffect, useState } from "react";
import ScreenHeader from "../../components/ScreenHeader";
import "./home.css";
import { CardSmall, CardBig } from "../../components/Cards";
import { FaBook } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import Axios from "axios";
import { API_URL } from "../../config";

const Home = () => {
  const [nbUser, setNbUser] = useState(0);
  const [nbCours, setNbcours] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(`${API_URL}/statistic`, {
        headers: {
          authorization: localStorage.getItem("e-learning-token-instructor"),
        },
      }).catch((err) => {
        console.log(err.response);
      });

      setNbUser(response.data.userCount);
      setNbcours(response.data.coursesCount);
    };
    fetchData();
  }, []);
  return (
    <div className="center">
      <ScreenHeader title="Home" />
      <div className="home-content">
        <div className="stats-cards-container">
          <CardSmall icon={<FaBook />} total="Courses" number={nbCours} />
          <CardSmall icon={<FaUserAlt />} total="Users" number={nbUser} />
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
