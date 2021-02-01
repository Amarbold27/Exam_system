import axios from "axios";
export const saveNews = (news) => {
  return function (dispatch, getState) {
    dispatch(newsSaveStart());
    const token = getState().signupReducer.token;
    axios
      .post(
        `https://exam-system-fb26a-default-rtdb.firebaseio.com/news.json?auth=${token}`,
        news
      )
      .then((response) => {
        dispatch(newsSaveSuccess(response));
        //console.log("Response news: ", response);
      })
      .catch((err) => dispatch(newsSaveError(err)));
  };
};
export const newsSaveStart = () => {
  return {
    type: "NEWS_SAVE_START",
  };
};
export const newsSaveSuccess = (newsData) => {
  return {
    type: "NEWS_SAVE_SUCCESS",
    newsData,
  };
};
export const newsSaveError = (error) => {
  return {
    type: "NEWS_SAVE_ERROR",
    error,
  };
};
export const loadNews = () => {
  return function (dispatch) {
    dispatch(loadNewsStart());
    axios
      .get(`https://exam-system-fb26a-default-rtdb.firebaseio.com/news.json`)
      .then((res) => {
        //console.log("result exam: ", res.data);
        const data = Object.entries(res.data).reverse();
        data.forEach(
          (el) =>
            (el[1].publishedAt = new Date(el[1].publishedAt).toLocaleString())
        );
        dispatch(loadNewsSuccess(data));
        //console.log("Exams: ", data);
      })
      .catch(
        (err) => dispatch(loadNewsError(err))
        //console.log("Get exam error: ", err);
      );
  };
};

export const loadNewsStart = () => {
  return {
    type: "LOAD_NEWS_START",
  };
};
export const loadNewsSuccess = (newsData) => {
  return {
    type: "LOAD_NEWS_SUCCESS",
    newsData,
  };
};
export const loadNewsError = (error) => {
  return {
    type: "LOAD_NEWS_ERROR",
    error,
  };
};
export const finishedFalse = () => {
  return {
    type: "FINISHED_FALSE",
  };
};
