import React, { Component } from "react";
import "./admin-pay.css";
import * as actions from "../../redux/actions/loginAction";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class AdminPay extends Component {
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
    //console.log("role: " + this.props.role);
    return (
      <div className="login-form">
        {this.props.userId && <Redirect to="/" />}
        <h3>Нэвтрэх </h3>
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
        <button type="button" className="btn-reg" onClick={this.login}>
          <span>Нэвтрэх</span>
        </button>
        <p className="forgot-password text-right">
          Бүртгүүлэх бол <Link to="/signup">Sign up?</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupReducer.logginIn,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
    role: state.signupReducer.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminPay);
