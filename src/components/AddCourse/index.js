import React from "react";
import "./addCourse.css";
import { Input } from "antd";
import ChapterCard from "./ChapterCard";
import { Button, DatePicker } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_URL } from "../../config";
import { useHistory } from "react-router-dom";
const { TextArea } = Input;

function AddCourse() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { course, chapter, loading } = useSelector((state) => state.addCourse);

  const onChangeForm = (i, key, value) => {
    dispatch({
      type: "SET_STATE",
      payload: {
        chapter: chapter.map((elem, index) => {
          if (i !== index) return elem;
          return { ...elem, [`${key}`]: value };
        }),
      },
    });
  };

  const onChangeCourse = (value, key) => {
    dispatch({
      type: "SET_STATE",
      payload: { course: { ...course, [`${key}`]: value } },
    });
  };

  const deleteQuestion = (id) => {
    dispatch({
      type: "SET_STATE",
      payload: { chapter: chapter.filter((elem, i) => i !== id) },
    });
    console.log(id);
  };

  const onSubmit = async () => {
    dispatch({
      type: "SET_STATE",
      payload: { error: "", loading: true },
    });
    const response = await axios
      .post(
        `${API_URL}/course`,
        {
          ...course,
          chapters: chapter,
          instructorId: "5fcad83b8ea7bd3ba0593547",
        },
        {
          headers: {
            authorization: localStorage.getItem("e-learning-token-instructor"),
          },
        }
      )
      .catch((err) => {
        return dispatch({
          type: "SET_STATE",
          payload: { error: "error occured", loading: false },
        });
      });
    dispatch({
      type: "SET_STATE",
      payload: { error: "", loading: false },
    });
    if (response.status === 201) {
      history.push("/");
    }
  };
  return (
    <div className="add-course">
      <div className="add-course-content">
        <Input
          value={course.title}
          onChange={(e) => onChangeCourse(e.target.value, "title")}
          className="add-course-input"
          placeholder="Your title course here.."
        />
        <Input
          value={course.subTitle}
          onChange={(e) => onChangeCourse(e.target.value, "subTitle")}
          className="add-course-input area"
          placeholder="Subtitle of course here.."
        />

        <div className="course-learn">
          <Input
            value={course.whatYouWillLearn}
            onChange={(e) => onChangeCourse(e.target.value, "whatYouWillLearn")}
            placeholder="What you will learn"
            className="course-learn-input"
          />
          <Input
            value={course.whatYouWillBuild}
            onChange={(e) => onChangeCourse(e.target.value, "whatYouWillBuild")}
            placeholder="What you will build"
            className="course-learn-input"
          />
        </div>
        <div className="course-description">
          <Input
            value={course.shortDescription}
            onChange={(e) => onChangeCourse(e.target.value, "shortDescription")}
            className="description-input"
            placeholder="Short description of course"
          />
          <TextArea
            value={course.longDescription}
            onChange={(e) => onChangeCourse(e.target.value, "longDescription")}
            className="description-input-long"
            placeholder="Long description of course"
          />
        </div>
        <div className="course-date-effort">
          <DatePicker
            value={course.date}
            onChange={(value) => onChangeCourse(value, "date")}
            className="date-input"
            placeholder="Date"
          />
          <Input
            value={course.estimatedEffort}
            onChange={(e) => onChangeCourse(e.target.value, "estimatedEffort")}
            className="effort-input"
            placeholder="Estimated effort"
          />
        </div>

        <Input
          value={course.imgUrl}
          onChange={(e) => onChangeCourse(e.target.value, "imgUrl")}
          className="add-course-input area"
          placeholder="URL image of course"
        />

        {chapter.map((champs, i) => (
          <ChapterCard
            champs={champs}
            deleteQuestion={() => deleteQuestion(i)}
            onChangeForm={onChangeForm}
            key={i}
            champsId={i}
          />
        ))}

        <div className="add-chapter">
          <Button
            onClick={() =>
              dispatch({
                type: "SET_STATE",
                payload: {
                  chapter: [
                    ...chapter,
                    {
                      title: "",
                      mainIdeas: "",
                      content: "",
                      delete: false,
                    },
                  ],
                },
              })
            }
            className="add-chapter-button"
          >
            {" "}
            + Add new chapter
          </Button>
        </div>
        <Button
          loading={loading}
          style={{
            height: "10vh",
            borderRadius: "6px",
            width: "60vw",
            backgroundColor: "#3e3d3d",
            fontWeight: "900",
            fontSize: "20px",
            color: "#fff",
            marginBottom: "30px",
          }}
          onClick={onSubmit}
        >
          Submit course
        </Button>
      </div>
    </div>
  );
}

export default AddCourse;
