import { SET_STATE } from "../actions/authAction";
const initialState = {
  email: "",
  password: "",
  error: "",
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
