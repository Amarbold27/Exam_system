import React from "react";
import "./style.css";
import {Exam} from "../exam";

export const ExamList = (props) => (
    <div className="exam-list">
        {props.exams.map( ex => (
            <Exam key = {ex.id} exam = {ex}/>
        ))}
    </div>
)