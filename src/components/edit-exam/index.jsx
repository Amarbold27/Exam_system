import React from "react";
import style from "./style.module.css";
//import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
//import DatePicker from "react-date-picker";
import DateTimePicker from "react-datetime-picker";
//import TimePicker from "react-time-picker";
import * as actions from "../../redux/actions/updateExamAction";
import { connect } from "react-redux";
import Spinner from "../../components/spinner";

class EditExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: this.props.editExam.lesson,
      class: this.props.editExam.class,
      category: this.props.editExam.category,
      price: this.props.editExam.price,
      date: new Date(this.props.editExam.start_date),
      duration: this.props.editExam.duration,
      examUrl: this.props.editExam.examUrl,
      calcUrl: this.props.editExam.calcUrl,
      resUrl: this.props.editExam.resUrl,
      description: this.props.editExam.description,
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
  handleDuration = (e) => {
    this.setState({ duration: e.target.value });
    console.log("ID n: ", this.props.examId);
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
      duration: this.state.duration,
      examUrl: this.state.examUrl,
      calcUrl: this.state.calcUrl,
      resUrl: this.state.resUrl,
      description: this.state.description,
      userId: this.props.userId,
      teacherName: fullname,
    };
    this.props.updateExam(this.props.examId, newExam);
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
          options={["Төлбөртэй", "Үнэгүй"]}
          onChange={this.onSelectPrice}
          value={this.state.price}
          placeholder="Төлбартэй эсэх"
          className={style.drpPrice}
        />
        <div className={style.startDate}>Эхлэх өдөр</div>
        <DateTimePicker
          value={this.state.date}
          onChange={this.onChangeDate}
          className={style.datepicker}
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
          className={style.descArea}
        ></textarea>
        <div className={style.btns}>
          <button className={style.btnClear} onClick={this.props.closeAction}>
            Хаах
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
    updateExam: (id, exam) => dispatch(actions.updateExam(id, exam)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExam);
