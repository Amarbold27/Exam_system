import React, { Component } from "react";
import "./admin-pay.css";
import Spinner from "../spinner";
import * as actions from "../../redux/actions/paymentAction";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
class AdminPay extends Component {
  state = {
    startDate: new Date(),
    endDate:"",
    registerNum:"",
    lessonName:"",
    lessonregister:"",
  };
  lessons = [
    "Математик",
    "Физик",
    "Хими",
    "Биологи",
    "Газар зүй",
    "Монгол хэл",
    "Англи хэл",
    "Түүх",
    "Нийгэм",
  ];

  onChangeLessonName = (e) => {
    this.setState({ lessonName: e.value });
  };
  onChangeRegisterNum = (e) => {
    this.setState({ registerNum: e.target.value });
  };
  onChangeEndDate=(e)=>{
    var theDate = new Date(this.state.startDate.getFullYear(),this.state.startDate.getMonth()+e.target.value,this.state.startDate.getDate()+1);
    this.setState({endDate:theDate});
  }
 
  savePayment = () => {
    const newPayment = {
      lesson: this.state.lessonName,
      register: this.state.registerNum,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      lessonregister: this.state.lessonName+this.state.registerNum,
    };
    this.props.savePayment(newPayment);
  };
 
  render() {
    //console.log("role: " + this.props.role);
    
    return (
      <div className="admin-form">
        <Dropdown
          options={this.lessons}
          onChange={this.onChangeLessonName}
          value={this.state.lessonName}
          placeholder="Хичээлээ сонгоно уу?"
        />
          <input
            type="text"
            onChange={this.onChangeRegisterNum}
            placeholder="РД оруул"
            required
          />
          <input
            type="text"
            onChange={this.onChangeEndDate}
            placeholder="Сунгах хугацаа сараар"
            required
          />
           {this.props.saving && <Spinner />}
          <button onClick={this.savePayment}>
            <span>
              Оруулах
            </span>
          </button>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    saving: state.paymentReducer.saving,
    finished: state.paymentReducer.finished,
    error: state.paymentReducer.error,
    payment: state.paymentReducer.paymentdata,
    };
};
const mapDispatchToProps = (dispatch) => {
  return {
    savePayment: (payment) => dispatch(actions.savePayment(payment)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminPay);
