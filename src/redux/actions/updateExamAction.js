import axios from "axios";

export const updateExam = (id, exam) => {
  return function (dispatch, getState) {
    dispatch(saveActionStart());
    const token = getState().signupReducer.token;
    axios
      .patch(
        `https://exam-system-fb26a-default-rtdb.firebaseio.com/exams/${id}.json?auth=${token}`,
        exam
      )
      .then((response) => {
        dispatch(saveActionSuccess());
        //dispatch(finishedFalse());
        // console.log("Response: ", response);
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
