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
        const userId = result.data.localId;
        axios
          .get(
            `https://exam-system-fb26a-default-rtdb.firebaseio.com/users.json?orderBy="userId"&equalTo="${userId}"`
          )
          .then((res) => {
            //console.log("Result: ", res);
            const idToken = result.data.idToken;
            const arr = Object.values(res.data);
            const obj = arr[0];
            const registerNum = obj.register;
            const userObject = { ...obj, idToken };
            dispatch(loginSuccess(userObject));
            axios
              .get(
                `https://exam-system-fb26a-default-rtdb.firebaseio.com/payment.json?orderBy="register"&equalTo="${registerNum}"`
              )
              .then((payRes) => {
                const payArr = Object.entries(payRes.data);
                payArr.forEach(function (el, index) {
                  const dd = new Date();
                  const pday = new Date(el[1].endDate);
                  if (pday <= dd) {
                    const a = el[0];
                    delete payArr[index];
                    axios
                      .delete(
                        `https://exam-system-fb26a-default-rtdb.firebaseio.com/payment/${a}.json?auth=${idToken}`
                      )
                      .then((res) => {
                        // console.log("Res ", res);
                        // console.log(res.data);
                      })
                      .catch((err) => console.log("Ustsan error: ", err));
                  }
                });
                let newArr = payArr.filter((el) => el !== null);
                //console.log("Pay arr: ", newArr);
                dispatch(getPayment(newArr));
              });
          });
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
export const getPayment = (payment) => {
  return {
    type: "GETPAYSUCCESS",
    payment,
  };
};
