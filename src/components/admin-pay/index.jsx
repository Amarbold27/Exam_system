import React, { Component } from "react";
import "./admin-pay.css";
import * as actions from "../../redux/actions/paymentAction";
import { connect } from "react-redux";
import { Alert } from "react-st-modal";

class AdminPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: null,
      registerNum: null,
      lessonName: null,
      lessonregister: null,
    };
  }

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
  handelChangeSelect = (e) => {
    this.setState({ lessonName: e.target.value });
  };

  onChangeRegisterNum = (e) => {
    this.setState({ registerNum: e.target.value });
  };
  onChangeEndDate = (e) => {
    var theDate = new Date(
      this.state.startDate.getFullYear(),
      this.state.startDate.getMonth() + e.target.value,
      this.state.startDate.getDate() + 1
    );
    this.setState({ endDate: theDate });
  };

  savePayment = () => {
    const newPayment = {
      lesson: this.state.lessonName,
      register: this.state.registerNum,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      lessonregister: this.state.lessonName + this.state.registerNum,
    };
    this.props.savePayment(newPayment);
  };

  render() {
    return (
      <div className="admin-form">
        <select
          className="admin-select"
          value={this.state.lessonName}
          onChange={this.handelChangeSelect}
        >
          {this.lessons.map((el) => (
            <option className="admin-options" key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <input
          type="text"
          onChange={this.onChangeRegisterNum}
          placeholder="РД оруул"
          className="admin-input"
          required
        />
        <input
          type="text"
          onChange={this.onChangeEndDate}
          placeholder="Сунгах хугацаа сараар"
          className="admin-input1"
          required
        />
        {(this.state.lessonName == null ||
          this.state.endDate == null ||
          this.state.registerNum == null) && (
          <button
            className="admin-btn-reg"
            onClick={async () => {
              await Alert("Амжилтгүй боллоо", "Бүртгэл");
            }}
          >
            <span>Оруулах</span>
          </button>
        )}
        {this.state.lessonName != null &&
          this.state.endDate != null &&
          this.state.registerNum != null && (
            <button className="admin-btn-reg" onClick={this.savePayment}>
              <span>Оруулах</span>
            </button>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saving: state.paymentReducer.saving,
    finished: state.paymentReducer.finished,
    error: state.paymentReducer.error,
    //payment: state.paymentReducer.paymentdata,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    savePayment: (payment) => dispatch(actions.savePayment(payment)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminPay);
