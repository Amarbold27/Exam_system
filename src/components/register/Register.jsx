import React, { Component } from "react";
import "./style.css";
import * as actions from "../../redux/actions/signupAction";
import { connect } from "react-redux";
import Spinner from "../spinner";
import { Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    lastname: "",
    firstname: "",
    register: "",
    email: "",
    school: "",
    class: "",
    password1: "",
    password2: "",
    error: "",
    role: "student",
  };
  changeLastName = (e) => {
    this.setState({ lastname: e.target.value });
  };
  changeFirstName = (e) => {
    this.setState({ firstname: e.target.value });
  };
  changeRegister = (e) => {
    this.setState({ register: e.target.value });
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changeSchool = (e) => {
    this.setState({ school: e.target.value });
  };
  changeClass = (e) => {
    this.setState({ class: e.target.value });
  };
  changePassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };
  changePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };
  signup = () => {
    if (this.state.password1 === this.state.password2) {
      const userDetail = {
        lastname: this.state.lastname,
        firstname: this.state.firstname,
        register: this.state.register,
        school: this.state.school,
        class: this.state.class,
        role: this.state.role,
      };
      this.props.signup(this.state.email, this.state.password1, userDetail);
    } else this.setState({ error: "Нууц үг хоорондоо таарахгүй байна." });
  };
  render() {
    return (
      <div className="register">
        {this.props.userId && <Redirect to="/exam" />}
        <h3>Бүртгүүлэх </h3>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.changeLastName}
            required
          />

          <label className="anime-label">Овог</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.changeFirstName}
            required
          />
          <label className="anime-label">Нэр</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.changeRegister}
            required
          />
          <label className="anime-label">Регистр</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.changeEmail}
            required
          />
          <label className="anime-label">И-мэйл хаяг</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.changeSchool}
            required
          />
          <label className="anime-label">Сургууль</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.changeClass}
            required
          />
          <label className="anime-label">Анги</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            onChange={this.changePassword1}
            required
          />
          <label className="anime-label">Нууц үг</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            onChange={this.changePassword2}
            required
          />
          <label className="anime-label">Нууц үг давтах</label>
        </div>
        {this.props.saving && <Spinner />}
        <button type="submit" className="btn-reg" onClick={this.signup}>
          <span>Бүртгүүлэх</span>
        </button>
        <p className="forgot-password text-right">
          Нэвтрэх бол <a href="/log-in">log in?</a>
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
    role: state.signupReducer.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, password, userDetail) =>
      dispatch(actions.signup(email, password, userDetail)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
