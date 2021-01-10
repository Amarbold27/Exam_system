import React from "react";
import style from "./style.module.css";

export const Exam = (props) => (
  <div className={style.exam}>
    <div className={style.date}>
      <b>{props.exam.start_date}</b>
    </div>
    <div className={style.title}>
      <b>{props.exam.exam_name}</b>
    </div>
    <span className={style.duration}>{props.exam.duration}</span>
    <span className={style.price}>{props.exam.price}</span>
    <a className={style.btnStart} href={props.exam.exam_url}>
      Эхлэх
    </a>
    <a className={style.btnCalc} href={props.exam.exam_url}>
      Бодолт
    </a>
    <a className={style.btnRes} href={props.exam.exam_url}>
      Дүн харах
    </a>
  </div>
);
