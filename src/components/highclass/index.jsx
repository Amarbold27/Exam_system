import React from "react";
import css from "./style.module.css";
//import examData from "../data/exams.json";
//import lessonData from "../data/lessons.json";
import { ExamList } from "../exam-list";
import { LessonList } from "../lesson-list/index";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/getExamAction";
//import axios from "axios";

class HighClassExams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: "",
    };
  }
  componentDidMount() {
    const category = "Дунд анги";
    this.props.loadExam(category);
    //console.log("lessons: ", this.props.lessons);
  }

  render() {
    return (
      <div className={css.container}>
        {/* {console.log("Exams Mid Class: ", this.props.examData)} */}
        <LessonList lessons={this.props.lessons} />
        <ExamList
          exams={this.props.examData.filter(
            (el) => el[1].lesson === this.props.lessonName
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.examReducer.loading,
    examData: state.examReducer.exams,
    lessons: state.examReducer.lessons,
    error: state.examReducer.error,
    lessonName: state.examReducer.lessonName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadExam: (category) => dispatch(actions.getExam(category)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HighClassExams);
