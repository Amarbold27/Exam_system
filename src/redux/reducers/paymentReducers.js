const initialState = {
  paymentdata: null,
    saving: false,
    finished: false,
    error: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAYSAVE_START":
      return {
        ...state,
          saving: true,
          finished: false,
      };
    case "PAYSAVE_SUCCESS":
      return {
        ...state,
          saving: false,
          finished: true,
       };

    case "PAYSAVE_ERROR":
      return {
        ...state,
          saving: false,
          finished: false,
          error: action.error,
       };
    case "GETPAYSUCCESS":
      //console.log("Payment: ", action.payment);
      return {
        ...state,
        paymentdata: action.payment,
      };
    default:
      return state;
  }
};
export default paymentReducer;
