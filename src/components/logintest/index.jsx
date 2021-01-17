import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import * as actions from "../../redux/actions/loginAction";
import Spinner from "../spinner";
import { Redirect } from "react-router-dom";

class LoginTest extends Component {
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
      <div className="Login">
        {this.props.userId && <Redirect to="/exam" />}
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="имэйл хаяг..."
        />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="нууц үг..."
        />
        {this.props.logginIn && <Spinner />}
        {this.props.firebaseError && <div>{this.props.firebaseError}</div>}
        <button type="success" onClick={this.login}>
          Нэвтрэх
        </button>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginTest);
