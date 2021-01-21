import axios from "axios";

export const resetSave = (email) => {
  return function (dispatch) {
    dispatch(ResetActionStart());
    const data = {
        requestType:"PASSWORD_RESET",
        email,
      };
      axios
      .post(
          'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC62giVWGb7BJycQ-Ed73crct5PtbMWIX8',
          data
      )
    .then((result) => {
        dispatch(ResetActionSuccess());
        console.log("password reset email sent successfully");
      console.log(result);
      })
      .catch((err) => dispatch(ResetActionError(err)));
  };
};
export const ResetActionStart = () => {
  return {
    type: "RESETSAVE_START",
  };
};

export const ResetActionSuccess = () => {
  return {
    type: "RESETSAVE_SUCCESS",
  };
};

export const ResetActionError = (error) => {
  return {
    type: "RESETSAVE_ERROR",
    error,
  };
};
