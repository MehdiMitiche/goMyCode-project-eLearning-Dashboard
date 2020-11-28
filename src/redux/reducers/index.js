import { combineReducers } from "redux";
import AddCourse from "./addCourse";

const rootReducer = combineReducers({
  addCourse: AddCourse,
});

export default rootReducer;
