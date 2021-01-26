import axios from "axios";
import * as actions from "./loginAction";

export const getUserInfo = (userId, idToken) => {
  return function (dispatch) {
    axios
      .get(
        `https://exam-system-fb26a-default-rtdb.firebaseio.com/users.json?orderBy="userId"&equalTo="${userId}"`
      )
      .then((res) => {
        //console.log("Result: ", res);

        const arr = Object.values(res.data);
        const obj = arr[0];
        const registerNum = obj.register;
        const userObject = { ...obj, idToken };
        dispatch(loginSuccess(userObject));

        //const expireDate = localStorage.getItem("expireDate");
        // expiresIn = 3600
        dispatch(actions.autoLogOut(localStorage.getItem("expiresIn") * 1000));
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
  };
};
export const loginSuccess = (firebaseResData) => {
  return {
    type: "LOGIN_SUCCESS",
    firebaseResData,
  };
};
export const getPayment = (payment) => {
  return {
    type: "GETPAYSUCCESS",
    payment,
  };
};
