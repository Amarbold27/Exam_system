import React, { Component } from "react";
import "./reset.css";
import * as actions from "../../redux/actions/resetAction";
import { connect } from "react-redux";
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
      <div className="reset-form">
        <h3 className="reset-title">НУУЦ ҮГ СЭРГЭЭХ</h3>

        <div className="reset-form-group">
          <input
            type="text"
            className="reset-form-control"
            onChange={this.changeEmail}
            required
          />
          <label className="reset-anime-label">Имэйл</label>
        </div>
        <button type="button" className="reset-btn-reg" onClick={this.reset}>
          <span>ИЛГЭЭХ</span>
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
