import axios from "axios";

export const savePayment = (payment) => {
  return function (dispatch, getState) {
    dispatch(PayActionStart());
    const token = getState().signupReducer.token;
    axios
      .post(
        `https://exam-system-fb26a-default-rtdb.firebaseio.com/payment.json?auth=${token}`,
        payment
      )
      .then((response) => {
        dispatch(PayActionSuccess());
        console.log("Response: ", response);
      })
      .catch((err) => dispatch(PayActionError(err)));
  };
};
export const PayActionStart = () => {
  return {
    type: "PAYSAVE_START",
  };
};

export const PayActionSuccess = () => {
  return {
    type: "PAYSAVE_SUCCESS",
  };
};

export const PayActionError = (error) => {
  return {
    type: "PAYSAVE_ERROR",
    error,
  };
};
