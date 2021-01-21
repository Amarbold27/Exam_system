import React from "react";
import "./style.css";
import Exam from "../exam";

export const ExamList = (props) => (
  <div className="exam-list">
    {props.exams.map((el) => (
      <Exam key={el[0]} exam={el[1]} examId = {el[0]} />
    ))}
  </div>
);
