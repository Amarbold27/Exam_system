import React from "react";
import "./style.css";
import examData from "../data/exams.json";
import {ExamList} from "../exam-list";
import {LessonList} from "../lesson-list";

export const ExamContainer = (props) => (
  <div className="exam-container">
      <LessonList/>
      <ExamList exams = {examData}/>
  </div>  
);
