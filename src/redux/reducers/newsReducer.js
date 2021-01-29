const initialState = {
  loading: false,
  error: null,
  //success: false,
  news: [],
  newNews: {
    saving: false,
    finished: false,
    error: null,
  },
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_NEWS_START":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_NEWS_SUCCESS":
      //console.log("News data: ", action.newsData);
      return {
        ...state,
        loading: false,
        news: action.newsData,
      };
    case "LOAD_NEWS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "NEWS_SAVE_START":
      return {
        ...state,
        newNews: {
          ...state.newNews,
          saving: true,
        },
      };
    case "NEWS_SAVE_SUCCESS":
      return {
        ...state,
        newNews: {
          ...state.newNews,
          saving: false,
          finished: true,
          error: null,
        },
      };
    case "NEWS_SAVE_ERROR":
      return {
        ...state,
        newNews: {
          ...state.newNews,
          saving: false,
          //finished: true,
          error: action.error,
        },
      };
    case "FINISHED_FALSE":
      return {
        ...state,
        newNews: {
          ...state.newNews,
          finished: false,
          error: null,
        },
      };
    default:
      return state;
  }
};
export default newsReducer;
