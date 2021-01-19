const initialState = {
  saving: false,
  logginIn: false,
  firebaseError: null,
  userId: null,
  token: null,
  //userDetail: null,
  role: null,
  firstname: "",
  lastname: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        saving: false,
        firebaseError: action.error,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        saving: false,
        // token: action.data.idToken,
        userId: action.firebaseResData.userId,
        token: action.firebaseResData.idToken,
        role: action.firebaseResData.role,
        firstname: action.firebaseResData.firstname,
        lastname: action.firebaseResData.lastname,
      };
    case "LOGIN_START":
      return {
        ...state,
        loginIn: true,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loginIn: false,
        firebaseError: action.error.response.data.error.message,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        logginIn: false,
        userId: action.firebaseResData.userId,
        token: action.firebaseResData.idToken,
        role: action.firebaseResData.role,
        firstname: action.firebaseResData.firstname,
        lastname: action.firebaseResData.lastname,
      };
    case "LOGOUT":
      return {
        ...state,
        userId: null,
        token: null,
      };

    default:
      return state;
  }
};

export default reducer;
