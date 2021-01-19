import React, { Component } from "react";
import "./admin-pay.css";
import * as actions from "../../redux/actions/loginAction";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class AdminPay extends Component {
  state = {
    startDate: "",
    endDate:"",
    registerNum:"",

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
      <div className="admin-form">
          <input
            type="text"
            onChange={}
            placeholder="хичээлийн нэр"
            required
          />
          <input
            type="text"
            onChange={}
            placeholder="РД оруул"
            required
          />
          <input
            type="text"
            onChange={}
            placeholder="Сунгах хугацаа сараар"
            required
          />
        </div>
    );
  }
}



export default (AdminPay);
