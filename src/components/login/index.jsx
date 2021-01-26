import React, { Component } from "react";
import "./login.css";
import Spinner from "../spinner";
import * as actions from "../../redux/actions/loginAction";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { IconContext } from "react-icons/lib";
import { FaUserCircle, BiLogIn, RiLockPasswordFill } from "react-icons/all";
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
    //console.log("role: " + this.props.role);
    return (
<<<<<<< HEAD
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
=======
      <IconContext.Provider value={{ className: "icons" }}>
        <div className="login-form">
          {this.props.userId && <Redirect to="/" />}
          <h3 className="login-h3">
            НЭВТРЭХ
            <BiLogIn className="login-icons" />
          </h3>
          <div className="icon-form-group">
            <div className="icon-name">
              <FaUserCircle className="login-icons" />
            </div>
            <div className="login-form-group">
              <input
                type="text"
                className="login-form-control"
                onChange={this.changeEmail}
                required
              />
              <label className="login-anime-label">Нэр</label>
            </div>
          </div>
          <div className="icon-form-group">
            <div className="icon-name">
              <RiLockPasswordFill className="login-icons" />
            </div>
            <div className="login-form-group">
              <input
                type="password"
                className="login-form-control"
                onChange={this.changePassword}
                required
              />
              <label className="login-anime-label">Нууц үг</label>
            </div>
          </div>
          {this.props.logginIn && <Spinner />}
          {this.props.firebaseError === "INVALID_PASSWORD" ? (
            <div className="login-error">Нууц үг буруу</div>
          ) : this.props.firebaseError === "EMAIL_NOT_FOUND" ? (
            <div className="login-error">Имэйл олдсонгүй</div>
          ) : (
            this.props.firebaseError === "INVALID_EMAIL" && (
              <div className="login-error">Имэйл буруу</div>
            )
          )}
          <p className="forget-password-div">
            {" "}
            <Link to="/reset">
              <span className="forget-password-span">Forget password</span>
            </Link>
          </p>
          <button type="button" className="btn-reg" onClick={this.login}>
            <span>НЭВТРЭХ</span>
          </button>
          <p className="forgot-password text-right">
            Бүртгүүлэх бол <Link to="/signup">Sign up?</Link>
          </p>
>>>>>>> 21481371f8cb75515e0c65ac4a076596294cf281
        </div>
      </IconContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupReducer.logginIn,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
    role: state.signupReducer.role,
    payment: state.paymentReducer.paymentdata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
