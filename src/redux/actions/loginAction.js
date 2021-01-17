import axios from "axios";

export const login = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https:identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC62giVWGb7BJycQ-Ed73crct5PtbMWIX8",
        data
      )
      .then((result) => {
        dispatch(loginSuccess(result.data));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
};

export const loginStart = () => {
  return {
    type: "LOGIN_START",
  };
};

export const loginSuccess = (firebaseResData) => {
  return {
    type: "LOGIN_SUCCESS",
    firebaseResData,
  };
};

export const loginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    error,
  };
};
export const logOut = () => {
  return {
    type: "LOGOUT",
  };
};
