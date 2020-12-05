const initialState = {
  course: {
    title: "",
    subTitle: "",
    shortDescription: "",
    longDescription: "",
    date: null,
    imgUrl: "",
    whatYouWillLearn: "",
    whatYouWillBuild: "",
    InstructorId: "",
    estimtedEffort: "",
  },
  chapter: [
    {
      title: "",
      mainIdeas: "",
      content: "",
      delete: false,
    },
  ],
  error: "",
  loading: false,
};

const AddCourse = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default AddCourse;
