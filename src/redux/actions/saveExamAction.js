import axios from "axios";

export const saveExam = (exam) => {
  return function (dispatch, getState) {
    dispatch(saveActionStart());
    const token = getState().signupReducer.token;
    axios
      .post(
        `https://exam-system-fb26a-default-rtdb.firebaseio.com/exams.json?auth=${token}`,
        exam
      )
      .then((response) => {
        dispatch(saveActionSuccess());
        console.log("Response: ", response);
      })
      .catch((err) => dispatch(saveActionError(err)));
  };
};
export const saveActionStart = () => {
  return {
    type: "SAVE_START",
  };
};

export const saveActionSuccess = () => {
  return {
    type: "SAVE_SUCCESS",
  };
};

export const saveActionError = (error) => {
  return {
    type: "SAVE_ERROR",
    error,
  };
};
export const finishedFalse = () => {
  return {
    type: "FINISHED_FALSE",
  };
};
