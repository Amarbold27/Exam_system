import axios from "axios";
import * as actions from "./getUserInfoAction";
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
        const userId = result.data.localId;
        const idToken = result.data.idToken;
        const expiresIn = result.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        localStorage.setItem("token", idToken);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expireDate", expireDate);
        localStorage.setItem("expiresIn", expiresIn);
        dispatch(actions.getUserInfo(userId, idToken));
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

// export const loginSuccess = (firebaseResData) => {
//   return {
//     type: "LOGIN_SUCCESS",
//     firebaseResData,
//   };
// };

export const loginError = (error) => {

  return {
    type: "LOGIN_ERROR",
    error,
  };
};

export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expireDate");
  return {
    type: "LOGOUT",
  };
};

export const autoLogOut = (timems) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(logOut());
    }, timems);
  };
};
// export const getPayment = (payment) => {
//   return {
//     type: "GETPAYSUCCESS",
//     payment,
//   };
// };
