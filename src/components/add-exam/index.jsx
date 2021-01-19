import React from "react";
import style from "./style.module.css";
//import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import * as actions from "../../redux/actions/saveExamAction";
import { connect } from "react-redux";
import Spinner from "../../components/spinner";

class AddExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: "Математик",
      class: "12",
      category: "Уралдаант сорил",
      price: "Тийм",
      date: new Date(),
      time: "11:00",
      duration: "100",
      examUrl: "",
      calcUrl: "",
      resUrl: "",
      description: "",
    };
  }
  lessons = [
    "Математик",
    "Физик",
    "Хими",
    "Биологи",
    "Газар зүй",
    "Монгол хэл",
    "Англи хэл",
    "Түүх",
    "Нийгэм",
  ];
  category = ["Уралдаант сорил", "ЭЕШ", "Ахлах анги", "Дунд анги", "Бага анги"];
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
    this.setState({ resUrl: e.target.value });
  };
  handleDescription = (e) => {
    this.setState({ description: e.target.value });
  };
  saveExam = () => {
    const fullname = this.props.lastname[0] + "." + this.props.firstname;
    const newExam = {
      lesson: this.state.lesson,
      class: this.state.class,
      category: this.state.category,
      price: this.state.price,
      start_date: this.state.date,
      start_time: this.state.time,
      duration: this.state.duration,
      examUrl: this.state.examUrl,
      calcUrl: this.state.calcUrl,
      resUrl: this.state.resUrl,
      description: this.state.description,
      userId: this.props.userId,
      teacherName: fullname,
    };
    this.props.saveExam(newExam);
    console.log(
      "Save exam: ",
      fullname
      // this.state.lesson,
      // this.state.class,
      // this.state.category,
      // this.state.price,
      // this.state.date,
      // this.state.time,
      // this.state.duration,
      // this.state.examUrl,
      // this.state.calcUrl,
      // this.state.resUrl,
      // this.state.description
    );
  };
  clearFields = () => {
    //console.log("Date: ", this.state.date);
    this.setState({
      lesson: "Математик",
      class: "12",
      category: "Уралдаант сорил",
      price: "Тийм",
      date: new Date(),
      time: "11:00",
      duration: "100",
      examUrl: "",
      calcUrl: "",
      resUrl: "",
      description: "",
    });
    //console.log("Finished: ", this.props.newExamState);
  };
  render() {
    return (
      <div className={style.container}>
        <div className={style.lesson}>Хичээл</div>
        <Dropdown
          options={this.lessons}
          onChange={this.onSelectLesson}
          value={this.state.lesson}
          className={style.drpLesson}
        />
        <div className={style.class}>Анги</div>
        <Dropdown
          options={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ]}
          onChange={this.onSelectClass}
          value={this.state.class} //
          className={style.drpClass}
        />
        <div className={style.category}>Төрөл</div>
        <Dropdown
          options={this.category}
          onChange={this.onSelectCategory}
          value={this.state.category}
          className={style.drpCategory}
        />
        <div className={style.price}>Төлбөртэй эсэх</div>
        <Dropdown
          options={["Тийм", "Үгүй"]}
          onChange={this.onSelectPrice}
          value={this.state.price}
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
        {this.props.newExamState.saving && <Spinner />}
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
        <div className={style.description}>Тайлбар</div>
        <textarea
          maxLength={120}
          value={this.state.description}
          onChange={this.handleDescription}
        ></textarea>
        <div className={style.btns}>
          <button className={style.btnClear} onClick={this.clearFields}>
            Цэвэрлэх
          </button>
          <button className={style.btnSave} onClick={this.saveExam}>
            Хадгалах
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
    firstname: state.signupReducer.firstname,
    lastname: state.signupReducer.lastname,
    newExamState: state.examReducer.newExam,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveExam: (exam) => dispatch(actions.saveExam(exam)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddExam);
