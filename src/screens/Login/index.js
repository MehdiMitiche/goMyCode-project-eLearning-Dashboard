import React from "react";
import LoginCard from "../../components/LoginCard";
import "./login.css";
import { isLoggedIn, loginValidator } from "../../helpers";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../../redux/actions/authAction";
import axios from "axios";

const API_URL = "http://localhost:8080/";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  if (isLoggedIn()) return <Redirect to="/" />;
  const onChangeForm = (key, value) => {
    dispatch({ type: SET_STATE, payload: { [`${key}`]: value } });
  };
  const onFinish = async () => {
    try {
      if (!loginValidator(data.email, data.password))
        return dispatch({
          type: SET_STATE,
          payload: { error: "Please fill the form !" },
        });
      dispatch({ type: SET_STATE, payload: { loading: true } });
      const response = await axios.post(`${API_URL}instructorAuth/login`, {
        email: data.email,
        password: data.password,
      });
      console.log(response);
      if (!response || response.status !== 200)
        dispatch({
          type: SET_STATE,

          payload: { loading: false, error: "Error, please try again!" },
        });
      console.log(response);
      localStorage.setItem("e-learning-token-instructor", response.data.token);
      history.push("/");
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: SET_STATE,
        payload: {
          loading: false,
          error: "Error, please try agai!",
        },
      });
    }
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <LoginCard onChangeForm={onChangeForm} {...data} onFinish={onFinish} />
      </div>
    </div>
  );
};

export default Login;
