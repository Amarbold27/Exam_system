import axios from "axios";

export const signup = (email, password) => {
  return function (dispatch) {
    dispatch(signupStart());

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC62giVWGb7BJycQ-Ed73crct5PtbMWIX8",
        data
      )
      .then((result) => {
        dispatch(signupSuccess(result.data));
      })
      .catch((error) => {
        dispatch(signupError(error));
      });

    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC62giVWGb7BJycQ-Ed73crct5PtbMWIX8
  };
};

export const signupStart = () => {
  return {
    type: "SIGNUP_START",
  };
};

export const signupSuccess = (firebaseResData) => {
  return {
    type: "SIGNUP_SUCCESS",
    firebaseResData,
  };
};

export const signupError = (error) => {
  return {
    type: "SIGNUP_ERROR",
    error,
  };
};
