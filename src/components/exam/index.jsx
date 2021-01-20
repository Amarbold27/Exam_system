import React, { Fragment } from "react";
import style from "./style.module.css";

class Exam extends React.Component {
  render() {
    return (
      <div className={style.exam}>
        <div className={style.date}>
          <b>{this.props.exam.start_date}</b>
        </div>
        <div className={style.title}>
          <b>{this.props.exam.lesson + " - " + this.props.exam.class}</b>
        </div>
        <p className={style.description}>
          {this.props.exam.description &&
            "( " + this.props.exam.description + " )"}
        </p>
        <span className={style.duration}>
          {this.props.exam.duration + " мин"}
        </span>
        <span className={style.price}>{this.props.exam.teacherName}</span>
        {new Date(this.props.exam.start_date) < new Date() && (
          <Fragment>
            <a
              className={style.btnStart}
              href={this.props.exam.exam_url}
              disabled
            >
              Эхлэх
            </a>
            <a className={style.btnCalc} href={this.props.exam.exam_url}>
              Бодолт
            </a>
            <a className={style.btnRes} href={this.props.exam.exam_url}>
              Дүн харах
            </a>
          </Fragment>
        )}
      </div>
    );
  }
}
export default Exam;
