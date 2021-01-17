import React, { Component } from "react";
import "./style.css";
import Spinner from "../spinner";
import * as actions from "../../redux/actions/loginAction";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    this.props.login(this.state.email, this.state.password);
  };
  render() {
    return (
      <form className="login-form">
        {this.props.userId && <Redirect to="/exam" />}
        <h3>Нэвтрэх</h3>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.changeEmail}
            required
          />
          <label className="anime-label">Нэр</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            onChange={this.changePassword}
            required
          />
          <label className="anime-label">Нууц үг</label>
        </div>
        {this.props.logginIn && <Spinner />}
        {this.props.firebaseError && <div>{this.props.firebaseError}</div>}
        <button type="success" className="btn-reg" onClick={this.login}>
          <span>Нэвтрэх</span>
        </button>
        <p className="forgot-password text-right">
          Бүртгүүлэх бол <a href="/register">Sign in?</a>
        </p>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupReducer.logginIn,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
