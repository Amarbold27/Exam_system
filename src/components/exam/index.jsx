import React from "react";
import "./style.css";

export const Exam = (props) => (
  <div className="exam">
    <div className="date">
      <b>{props.exam.start_date}</b>
    </div>
    <div className="title">
      <b>{props.exam.exam_name}</b>
    </div>
    <span className="duration">{props.exam.duration}</span>
    <span className="price">{props.exam.price}</span>
    <a className="btnStart" href={props.exam.exam_url}>
      Эхлэх
    </a>
    <a className="btnCalc" href={props.exam.exam_url}>
      Бодолт
    </a>
    <a className="btnRes" href={props.exam.exam_url}>
      Дүн харах
    </a>
  </div>
);
