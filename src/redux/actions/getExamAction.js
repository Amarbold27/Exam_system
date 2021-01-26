import axios from "axios";

export const getExam = (category) => {
  return function (dispatch) {
    dispatch(getExamStart());
    axios
      .get(
        `https://exam-system-fb26a-default-rtdb.firebaseio.com/exams.json?orderBy="category"&equalTo="${category}"`
      )
      .then((res) => {
        //console.log("result exam: ", res.data);
        const data = Object.entries(res.data);
        data.sort(compare);
        data.forEach(
          (el) =>
            (el[1].start_date = new Date(el[1].start_date).toLocaleString())
        );
        dispatch(getExamSuccess(data));
        //console.log("Exams: ", data);
      })
      .catch(
        (err) => dispatch(getExamError(err))
        //console.log("Get exam error: ", err);
      );
  };
};
function compare(a, b) {
  const dateA = a[1].start_date;
  const dateB = b[1].start_date;
  const classA = a[1].class;
  const classB = b[1].class;
  let comp = 0;
  if (classA > classB) {
    comp = 1;
  } else if (classA < classB) {
    comp = -1;
  } else {
    if (dateA > dateB) {
      comp = 1;
    } else if (dateA < dateB) {
      comp = -1;
    }
  }
  return comp;
}
export const getExamStart = () => {
  return {
    type: "GET_EXAM_START",
  };
};
export const getExamSuccess = (exams) => {
  return {
    type: "GET_EXAM_SUCCESS",
    data: exams,
  };
};
export const getExamError = (error) => {
  return {
    type: "GET_EXAM_ERROR",
    error,
  };
};
export const loadLessonExam = (lesson) => {
  return function (dispatch) {
    dispatch(getLessonExam(lesson));
  };
};
export const getLessonExam = (lesson) => {
  return {
    type: "GET_LESSON_EXAM",
    lessonName: lesson,
  };
};
