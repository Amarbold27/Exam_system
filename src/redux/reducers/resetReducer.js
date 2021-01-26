const initialState = {
   
    newReset: {
      saving: false,
      finished: false,
      error: null,
    },
   };
  
  const resetReducer = (state = initialState, action) => {
    switch (action.type) {
      case "RESETSAVE_START":
        alert("sending");
      return {
          ...state,
          newReset: {
            ...state.newReset,
            saving: true,
          },
        };
      case "RESETSAVE_SUCCESS":
        alert("Sent Mail.");
        return {
          ...state,
          newReset: {
            ...state.newReset,
            saving: false,
            finished: true,
            error: null,
          },
        };
  
      case "ESETSAVE_ERROR":
        return {
          ...state,
          newReset: {
            ...state.newReset,
            saving: false,
            finished: true,
            error: action.error,
          },
        };
      default:
        return state;
    }
  };
  export default resetReducer;
  