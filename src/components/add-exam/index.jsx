import React from "react";
import style from "./style.module.css";
import "react-dropdown/style.css";
import DateTimePicker from "react-datetime-picker";
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
      price: "Үнэгүй",
      date: new Date(),
      duration: "100",
      examUrl: "",
      calcUrl: "",
      resUrl: "",
      description: "",
    };
  }
  componentDidMount = () => {
    this.props.finishedFalse();
  };
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
  classes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  category = ["Уралдаант сорил", "ЭЕШ", "Ахлах анги", "Дунд анги", "Бага анги"];
  //options = ["one", "two", "three"];
  onSelectLesson = (e) => {
    this.setState({ lesson: e.target.value });
  };
  onSelectClass = (e) => {
    this.setState({ class: e.target.value });
  };
  onSelectCategory = (e) => {
    this.setState({ category: e.target.value });
  };
  onSelectPrice = (e) => {
    this.setState({ price: e.target.value });
  };
  onChangeDate = (value) => {
    this.setState({ date: value });
    //console.log("date " + this.state.date);
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
      duration: this.state.duration,
      examUrl: this.state.examUrl,
      calcUrl: this.state.calcUrl,
      resUrl: this.state.resUrl,
      description: this.state.description,
      userId: this.props.userId,
      teacherName: fullname,
    };
    this.props.saveExam(newExam);
  };
  clearFields = () => {
    this.props.finishedFalse();
    //console.log("Date: ", this.state.date);
    this.setState({
      lesson: "Математик",
      class: "12",
      category: "Уралдаант сорил",
      price: "Тийм",
      date: new Date(),
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
        <select
          className={style.addSelect}
          value={this.state.lesson}
          onChange={this.onSelectLesson}
        >
          {this.lessons.map((les) => (
            <option className="admin-options" value={les}>
              {les}
            </option>
          ))}
        </select>

        <div className={style.class}>Анги</div>
        <select
          className={style.addSelect}
          value={this.state.class}
          onChange={this.onSelectClass}
        >
          {this.classes.map((val) => (
            <option className="admin-options" value={val}>
              {val}
            </option>
          ))}
        </select>
        <div className={style.category}>Төрөл</div>
        <select
          className={style.addSelect}
          value={this.state.category}
          onChange={this.onSelectCategory}
        >
          {this.category.map((val) => (
            <option className="admin-options" value={val}>
              {val}
            </option>
          ))}
        </select>
        <div className={style.price}>Төлбөртэй эсэх</div>
        <select
          className={style.addSelect}
          value={this.state.price}
          onChange={this.onSelectPrice}
        >
          <option className="admin-options" value="Төлбөртэй">
            Төлбөртэй
          </option>
          <option className="admin-options" value="Үнэгүй">
            Үнэгүй
          </option>
        </select>
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
        {this.props.newExamState.saving && (
          <div className={style.spinner}>
            <Spinner />
          </div>
        )}
        {this.props.newExamState.finished && (
          <span className={style.stateSuccess}>Амжилттай хадгаллаа</span>
        )}
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
    finishedFalse: () => dispatch(actions.finishedFalse()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddExam);
