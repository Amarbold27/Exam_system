import React from "react";
import css from "./style.module.css";
// import { useParams, useRouteMatch } from "react-router-dom";
// import { connect } from "react-redux";
//import * as actions from "../../../redux/actions/newsAction";
import renderHTML from "react-render-html";
//import styled from "styled-components";
import axios from "axios";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: {},
      newsContent: "",
    };
  }
  componentDidMount = () => {
    axios
      .get(`https://exam-system-fb26a-default-rtdb.firebaseio.com/news.json`)
      .then((res) => {
        const data = Object.entries(res.data).reverse();
        data.forEach(
          (el) =>
            (el[1].publishedAt = new Date(el[1].publishedAt).toLocaleString())
        );
        const newsdb = data.find(
          (el) => el[0] === this.props.match.params.newsId
        );
        console.log("News: ", newsdb);
        this.setState({ newsItem: newsdb[1] });
        this.setState({ newsContent: this.state.newsItem.content });
      });
  };

  render() {
    return (
      <div className={css.newsContainer}>
        <span className={css.title}>{this.state.newsItem.title}</span>
        <span className={css.publishedAt}>
          {this.state.newsItem.publishedAt}
        </span>
        <div className={css.content}>
          {/* {renderHTML(this.state.newsItem.content)} */}
          {renderHTML(this.state.newsContent)}
        </div>
        <img
          src={this.state.newsItem.image}
          className={css.image}
          alt={this.state.newsItem.title}
        ></img>
      </div>
    );
  }
}
export default News;
// const mapStateToProps = (state) => {
//   return {
//     loading: state.newsReducer.loading,
//     error: state.newsReducer.error,
//     news: state.newsReducer.news,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadNews: () => dispatch(actions.loadNews()),
//   };
// };
// export default connect(mapStateToProps)(News);

// const News = (props) => {
//   return (
//     <div>
//       <span>News bh ystoi</span>
//       {/* <span>{newsItem[1].title}</span>
//       <span>{newsItem[1].publishedAt}</span>
//       <span>{newsItem[1].content}</span>
//       <span>{newsItem[1].image}</span> */}
//     </div>
//   );
// };
// export default News;

//v.02
//const { newsId } = useParams();
// useEffect(() => {
//   console.log("Match ", props);
// }, []);
// const [newsItem, setNewsItem] = useState({});
// const fetchItem = () => {
//   axios
//     .get(`https://exam-system-fb26a-default-rtdb.firebaseio.com/news.json`)
//     .then((res) => {
//       //console.log("result exam: ", res.data);
//       const data = Object.entries(res.data).reverse();
//       data.forEach(
//         (el) =>
//           (el[1].publishedAt = new Date(el[1].publishedAt).toLocaleString())
//       );
//       const newsdb = data.find((el) => el[0] === props.match.params.newsId);
//       setNewsItem(newsdb);
//       console.log("News: ", newsItem);
//     });
// };
// const newsItem = props.news.find((el) => el[0] === props.match.params.newsId);
//console.log("News: ", newsItem);
