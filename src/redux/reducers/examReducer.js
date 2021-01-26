const initialState = {
  //get exam
  exams: [],
  lessons: [],
  loading: false,
  error: null,
  lessonName: "",

  // save exam
  newExam: {
    saving: false,
    finished: false,
    error: null,
  },
};

const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXAM_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_EXAM_SUCCESS":
      const lessonList = action.data.map((el) => el[1].lesson);
      return {
        ...state,
        loading: false,
        exams: action.data,
        lessons: Array.from(new Set(lessonList)),
      };
    case "GET_EXAM_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "SAVE_START":
      return {
        ...state,
        newExam: {
          ...state.newExam,
          saving: true,
        },
      };
    case "SAVE_SUCCESS":
      return {
        ...state,
        newExam: {
          ...state.newExam,
          saving: false,
          finished: true,
          error: null,
        },
      };
    case "SAVE_ERROR":
      return {
        ...state,
        newExam: {
          ...state.newExam,
          saving: false,
          finished: true,
          error: action.error,
        },
      };
      case "GET_LESSON_EXAM":
        return {
          ...state,
          lessonName: action.lessonName,
        }
    default:
      return state;
  }
};
export default examReducer;
