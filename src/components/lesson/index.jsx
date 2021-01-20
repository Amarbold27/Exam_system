import React from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/getExamAction";

class Lesson extends React.Component {
  //className={css.container}
  lessonHandler = () => {
    this.props.loadLessonExam(this.props.lessonName);
  };
  render() {
    return (
      <div className={css.item} onClick={this.lessonHandler}>
        {this.props.lessonName}
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {

//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    loadLessonExam: (lesson) => dispatch(actions.loadLessonExam(lesson)),
  };
};
export default connect(null, mapDispatchToProps)(Lesson);
