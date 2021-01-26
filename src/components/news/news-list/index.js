//import axios from "axios";
import React, { Component } from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/newsAction";
//import { News } from "../news-article";
import NewsButton from "../news-button/index";

class NewsList extends Component {
  componentDidMount = () => {
    this.props.loadNews();
  };
  render() {
    return (
      <div className={css.container}>
        {this.props.news.map((el) => (
          <NewsButton key={el[0]} news={el[1]} id={el[0]} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.newsReducer.loading,
    error: state.newsReducer.error,
    news: state.newsReducer.news,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadNews: () => dispatch(actions.loadNews()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
