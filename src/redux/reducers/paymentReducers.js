const initialState = {
   
    newPayment: {
      saving: false,
      finished: false,
      error: null,
    },
    paymentdata:null,
  };
  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PAYSAVE_START":
        alert("save.");
      return {
          ...state,
          newPayment: {
            ...state.newPayment,
            saving: true,
          },
        };
      case "PAYSAVE_SUCCESS":
        alert("Амжилттай хадгаллаа.");
        return {
          ...state,
          newPayment: {
            ...state.newPayment,
            saving: false,
            finished: true,
            error: null,
          },
        };
  
      case "PAYSAVE_ERROR":
        return {
          ...state,
          newPayment: {
            ...state.newPayment,
            saving: false,
            finished: true,
            error: action.error,
          },
        };
        case "GETPAYSUCCESS":
          return {
            ...state,
            paymentdata: action.payment,
          }
      default:
        return state;
    }
  };
  export default paymentReducer;
  