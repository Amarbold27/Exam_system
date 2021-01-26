import React from "react";
import css from "./style.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
//import News from "../news-article";
import { withRouter } from "react-router-dom";
//import AddExam from "../../add-exam";
//background-image: url("${props.news.image}");
// width: 1000px;
// height: 400px;
class NewsButton extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleUrl = this.handleUrl.bind(this);
  // }
  handleUrl = () => {
    this.props.history.push(`/news/${this.props.id}`);
  };
  //   const { path, url } = useRouteMatch();
  render() {
    const Content = styled.div`
      word-wrap: break-word;
      background-image: url("${this.props.news.image}");
      background-repeat: no-repeat;
      background-size: cover;
      height: 200px;
      width: 300px;
      color: white;
      background-color: #fad7d7;
      display: flex;
      box-shadow: rgba(14, 14, 14, 0.6) 0 -120px 90px -20px inset;
      background-repeat: no-repeat;

      @media only screen and (max-width: 500px) {
        background-size: cover;
        width: 90vw;
        margin-top: 1em;
      }
    `;
    return (
      <Content>
        <div className={css.postdata}>
          {/* <Link to={`${url}/${props.id}`}>{props.news.title}</Link> */}
          <Link to={`news/${this.props.id}`} className={css.newsLink}>
            {this.props.news.title}
          </Link>
          {/* <button onClick={this.handleUrl}>{this.props.news.title}</button> */}
          <span className={css.publishedAt}>
            <AiOutlineClockCircle />
            {this.props.news.publishedAt}
          </span>
        </div>
      </Content>
    );
  }
}
export default withRouter(NewsButton);
