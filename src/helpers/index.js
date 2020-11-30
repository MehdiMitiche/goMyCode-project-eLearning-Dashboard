import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const isLoggedIn = () => {
  const token = localStorage.getItem("e-learning-token");
  if (!token) return false;
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    localStorage.setItem("userId", verified.userId);
    localStorage.setItem("email", verified.email);
    if (verified) return true;
  } catch (err) {
    return false;
  }
};
const logout = () => {
  localStorage.removeItem("e-learning-token");
};

const loginValidator = (email, password) => {
  if (!email || !password) return false;
  return true;
};

export { isLoggedIn, logout, loginValidator };
