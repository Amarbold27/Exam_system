import axios from "axios";

export const signup = (email, password, userDetail) => {
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
        const userId = result.data.localId;
        userDetail.userId = userId;
        const token = result.data.idToken;
        //console.log("token: ", token);
        userDetail.idToken = token;

        axios
          .post(
            `https://exam-system-fb26a-default-rtdb.firebaseio.com/users.json?auth=${token}`,
            userDetail
          )
          .then((res) => {
            //const userInfo = { ...result.data, ...userDetail };
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            dispatch(signupSuccess(userDetail));
          })
          .catch((err) => {
            alert("aldaa", err);
            dispatch(signupError(err));
          });
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
