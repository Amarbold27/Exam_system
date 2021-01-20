import React from "react";
import css from "./style.module.css";
import examData from "../data/exams.json";
import { ExamList } from "../exam-list";
import { LessonList } from "../lesson-list/index";
import axios from "axios";

class ExamContainer extends React.Component {
  componentDidMount = () => {
    let reg = "ru00292711";
    axios
      .get(
        `https://exam-system-fb26a-default-rtdb.firebaseio.com/payment.json?orderBy="register"&equalTo="${reg}"`
      )
      .then((payRes) => {
        console.log("______payRes___" + payRes.data);
        // const payArr = Object.entries(payRes.data);
        //console.log("_______payment______"+payArr);
        //  dispatch(getPayment(objs));
      })
      .catch((err) => {
        console.log("pay err: ", err);
      });
  };
  render() {
    return (
      <div className={css.container}>
        <LessonList lessons={this.props.lessons} />
        <ExamList exams={examData} />
      </div>
    );
  }
}
export default ExamContainer;
