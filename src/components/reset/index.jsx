import React, { Component } from "react";
import "./reset.css";
import * as actions from "../../redux/actions/resetAction";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
class Reset extends Component {
    state = {
        email: "",
        };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  reset = () => {
    this.props.resetSave(this.state.email);
  };
    render(){
    return (
      <div className="login-form">
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

        <p> <Link to="/signup">Бүртгүүлэх</Link></p>
        <button type="button" className="btn-reg" onClick={this.reset}>
          <span>Нэвтрэх</span>
        </button>
      </div>
    );
    
  }
}
const mapStateToProps = (state) => {
    return {
      saving: state.resetReducer.saving,
      finished: state.resetReducer.finished,
      error: state.resetReducer.error,
  
      };
  };
const mapDispatchToProps = (dispatch) => {
    return {
      resetSave: (email) => dispatch(actions.resetSave(email))
    };
  };
export default  connect(mapStateToProps, mapDispatchToProps)(Reset);
