import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import * as actions from "../../redux/actions/signupAction";
import { connect } from "react-redux";
import Spinner from "../spinner";

class SignUpTest extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };
  changePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  signup = () => {
    if (this.state.password1 === this.state.password2) {
      this.props.signup(this.state.email, this.state.password1);
    } else this.setState({ error: "Нууц үг хоорондоо таарахгүй байна." });
  };

  render() {
    return (
      <div className="Login">
        {this.props.userId && <Redirect to="/log-in" />}
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="имэйл хаяг..."
        />
        <input
          onChange={this.changePassword1}
          type="password"
          placeholder="нууц үг..."
        />
        <input
          onChange={this.changePassword2}
          type="password"
          placeholder="нууц үг давт..."
        />
        {this.state.error && <div>{this.state.error}</div>}
        {this.props.firebaseError && <div>{this.props.firebaseError}</div>}

        {this.props.saving && <Spinner />}
        <button type="success" onClick={this.signup}>
          Бүртгүүлэх
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, password) => dispatch(actions.signup(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpTest);
