import { combineReducers } from "redux";
import AddCourse from "./addCourse";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  addCourse: AddCourse,
  auth: authReducer,
});

export default rootReducer;
