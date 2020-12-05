import React from "react";
import "./chapterCard.css";
import { Input, Button } from "antd";

const { TextArea } = Input;

function ChapterCard({ champs, champsId, onChangeForm, deleteQuestion }) {
  return (
    <div>
      <div className="chapter-content">
        <Input
          value={champs.title}
          onChange={(e) => onChangeForm(champsId, "title", e.target.value)}
          placeholder="Chapter title"
          className="chapter-input"
        />
        <Input
          onChange={(e) => onChangeForm(champsId, "mainIdeas", e.target.value)}
          value={champs.mainIdeas}
          placeholder=" main ideas"
          className="chapter-input"
        />
        <TextArea
          onChange={(e) => onChangeForm(champsId, "content", e.target.value)}
          value={champs.content}
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
