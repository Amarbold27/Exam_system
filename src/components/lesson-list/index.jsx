import React from "react";
import css from "./style.module.css";
import { Lesson } from "../lesson/index";

export const LessonList = (props) => {
  return (
    <div className={css.lesson_list}>
      {props.lessons.map((el, index) => (
        <Lesson ner={el} key={index} />
      ))}
    </div>
  );
};
