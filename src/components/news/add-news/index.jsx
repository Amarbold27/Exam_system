import React, { Component } from "react";
import css from "./style.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/newsAction";
//import renderHTML from "react-render-html";

class AddNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: "",
      image: "",
    };
    //this.handleContent = this.handleContent.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleImgUrl = this.handleImgUrl.bind(this);
    this.handleSaveNews = this.handleSaveNews.bind(this);
  }
  //   componentDidMount() {
  //     this.focusEditor();
  //   }
  onInputChange(e) {
    this.setState({
      content: e,
    });
  }
  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  handleImgUrl = (e) => {
    this.setState({ image: e.target.value });
  };
  handleSaveNews = () => {
    console.log("save daragdsan");
    const news = {
      title: this.state.title,
      content: this.state.content,
      image: this.state.image,
      publishedAt: new Date(),
    };
    this.props.saveNews(news);
  };

  render() {
    return (
      <div className={css.container}>
        <h2>Мэдээ</h2>
        <TextField
          id="standard-basic"
          label="Гарчиг"
          onChange={this.handleTitle}
          value={this.state.value}
        />
        <TextField
          id="standard-basic"
          label="Зургийн холбоос"
          value={this.state.image}
          onChange={this.handleImgUrl}
        />
        <ReactQuill
          modules={AddNews.modules}
          formats={AddNews.formats}
          value={this.state.content}
          onChange={this.onInputChange}
        />
        <div className={css.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSaveNews}
          >
            Нийтлэх
          </Button>
          <button onClick={this.handleSaveNews}>Хадгалах</button>
        </div>
        {/* <div>{renderHTML(this.state.content)}</div> */}
      </div>
    );
  }
}
AddNews.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "ordered",
  "bullet",
  "link",
  "image",
  "video",
  "clean",
  "code-block",
];
AddNews.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};
const mapStateToProps = (state) => {
  return {
    saving: state.newsReducer.saving,
    error: state.newsReducer.error,
    finished: state.newsReducer.finished,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveNews: (news) => dispatch(actions.saveNews(news)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddNews);