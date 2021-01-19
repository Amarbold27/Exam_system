const initialState = {
  // save exam

  //finished1: false,
  newExam: {
    saving: false,
    finished: false,
    error: null,
  },
};

const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_START":
      return {
        ...state,
        newExam: {
          ...state.newExam,
          saving: true,
        },
      };
    case "SAVE_SUCCESS":
      alert("Амжилттай хадгаллаа.");
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
    default:
      return state;
  }
};
export default examReducer;
