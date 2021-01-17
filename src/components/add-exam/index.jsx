import React from "react";
import style from "./style.module.css";
//import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

class AddExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: "Математик",
      class: 12,
      category: "Уралдаант сорил",
      price: "Тийм",
      date: new Date(),
      time: "11:00",
      duration: "100",
      examUrl: "",
      calcUrl: "",
      resUrl: "",
    };
  }
  //options = ["one", "two", "three"];
  onSelectLesson = (e) => {
    this.setState({ lesson: e.value });
  };
  onSelectClass = (e) => {
    this.setState({ class: e.value });
  };
  onSelectCategory = (e) => {
    this.setState({ category: e.value });
  };
  onSelectPrice = (e) => {
    this.setState({ price: e.value });
  };
  onChangeDate = (value) => {
    this.setState({ date: value });
    //console.log("date " + this.state.date);
  };
  onChangeTime = (value) => {
    this.setState({ time: value });
  };
  handleDuration = (e) => {
    this.setState({ duration: e.target.value });
  };
  handleExamUrl = (e) => {
    this.setState({ examUrl: e.target.value });
  };
  handleCalcUrl = (e) => {
    this.setState({ calcUrl: e.target.value });
  };
  handleResUrl = (e) => {
    this.setState({ duration: e.target.value });
  };
  render() {
    return (
      <div className={style.container}>
        <div className={style.lesson}>Хичээл</div>
        <Dropdown
          options={["Математик", "Монгол хэл", "three"]}
          onChange={this.onSelectLesson}
          value={"Математик"}
          placeholder="Select an option"
          className={style.drpLesson}
        />
        <div className={style.class}>Анги</div>
        <Dropdown
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          onChange={this.onSelectClass}
          value={"1"}
          placeholder="Select a class"
          className={style.drpClass}
        />
        <div className={style.category}>Төрөл</div>
        <Dropdown
          options={["Уралдаант сорил", "ЭЕШ", "Ахлах анги"]}
          onChange={this.onSelectCategory}
          value={""}
          placeholder="Уралдаант сорил"
          className={style.drpCategory}
        />
        <div className={style.price}>Төлбөртэй эсэх</div>
        <Dropdown
          options={["Тийм", "Үгүй"]}
          onChange={this.onSelectPrice}
          value={"Тийм"}
          placeholder="Төлбартэй эсэх"
          className={style.drpPrice}
        />
        <div className={style.startDate}>Эхлэх өдөр</div>
        <DatePicker
          value={this.state.date}
          onChange={this.onChangeDate}
          className={style.datepicker}
        />
        <div className={style.startTime}>Эхлэх цаг</div>
        <TimePicker
          value={this.state.time}
          onChange={this.onChangeTime}
          className={style.timepicker}
        />
        <div className={style.duration}>Үргэлжлэх хугацаа</div>
        <input
          type="text"
          value={this.state.duration}
          onChange={this.handleDuration}
          className={style.inputDuration}
          placeholder="Үргэлжлэх хугацаа минутаар."
        />
        <div className={style.examUrl}>Шалгалтын холбоос</div>
        <input
          type="text"
          value={this.state.examUrl}
          onChange={this.handleExamUrl}
          className={style.inputExamUrl}
          placeholder="Google forms url..."
        />
        <div className={style.calcUrl}>Бодолтын холбоос</div>
        <input
          type="text"
          value={this.state.calcUrl}
          onChange={this.handleCalcUrl}
          className={style.inputCalcUrl}
          placeholder="youtube url..."
        />
        <div className={style.resultUrl}>Дүнгийн холбоос</div>
        <input
          type="text"
          value={this.state.resUrl}
          onChange={this.handleResUrl}
          className={style.inputResUrl}
          placeholder="Google spread sheet url..."
        />
      </div>
    );
  }
}
export { AddExam };
