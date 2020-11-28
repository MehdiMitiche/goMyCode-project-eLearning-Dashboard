import React from "react";
import "./chapterCard.css";
import { Input, Button } from "antd";
import { useSelector } from "react-redux";

const { TextArea } = Input;

function ChapterCard({ champsId, onChangeForm, deleteQuestion }) {
  const { chapter } = useSelector((state) => state.addCourse);

  return (
    <div>
      <div className="chapter-content">
        <Input
          onChange={(e) => onChangeForm(champsId, "title", e.target.value)}
          value={chapter.title}
          placeholder="Chapter title"
          className="chapter-input"
        />
        <Input
          onChange={(e) => onChangeForm(champsId, "mainIdeas", e.target.value)}
          value={chapter.mainIdeas}
          placeholder=" main ideas"
          className="chapter-input"
        />
        <TextArea
          onChange={(e) => onChangeForm(champsId, "content", e.target.value)}
          value={chapter.content}
          placeholder="Chapter content"
          className="chapter-input"
        />
        <div className="button-content">
          <div></div>

          <Button
            style={{
              backgroundColor: "#3edcad",
              marginBottom: "15px",
              border: "#fff solid 2px",
              color: "#fff",
              width: "fit-content",
              height: "5vh",
              fontSize: "20px",
              fontWeight: "900",
            }}
            onClick={() => deleteQuestion()}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChapterCard;
