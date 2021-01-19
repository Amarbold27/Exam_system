import React from "react";
import css from "./style.module.css";
import examData from "../data/exams.json";
import { ExamList } from "../exam-list";
import { LessonList } from "../lesson-list/index";

export const ExamContainer = (props) => {
  return (
    <div className={css.container}>
      <LessonList lessons={props.lessons} />
      <ExamList exams={examData} />
    </div>
  );
};
