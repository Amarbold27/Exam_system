import React, { Fragment } from "react";
import style from "./style.module.css";
import { BiTime } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/all";
import { IconContext } from "react-icons/lib";
import { AiOutlineEdit } from "react-icons/ai";
//import * as actions from "../../redux/actions/paymentAction";
import { connect } from "react-redux";
import Modal from "react-modal";
import EditExam from "../edit-exam";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show3btn: false,
      showPayBtn: false,
      showTimeInfo: false,
      showBtnEdit: false,
      modalIsOpen: false,
      modalIsOpen1:false,
    };
  }
  componentDidMount = () => {
    //console.log("Tulburuud: ", this.props.payments);
    let isFree = false;
    let isPaid = false;
    if (this.props.exam.price === "Үнэгүй") isFree = true;
    if (this.props.exam.price === "Төлбөртэй") isPaid = true;
    let isPay = this.props.payments.includes(this.props.exam.lesson);
    let timeStart = false;
    if (new Date(this.props.exam.start_date) < new Date()) timeStart = true;
    if (timeStart) {
      if (isFree || isPay) this.setState({ show3btn: true });
    } else {
      if (isFree || isPay) this.setState({ showTimeInfo: true });
    }
    if (isPaid && !isPay) this.setState({ showPayBtn: true });
    if (this.props.exam.userId === this.props.teacherId)
      this.setState({ showBtnEdit: true });
  };
  /////
  //let subtitle;
  //const [modalIsOpen, setIsOpen] = React.useState(false);
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  openModal1 = () => {
    this.setState({ modalIsOpen1: true });
  };

  closeModal1 = () => {
    this.setState({ modalIsOpen1: false });
  };
  ////
  render() {
    return (
      <IconContext.Provider
        value={{   color: "#304b8e", style: { marginTop: "1px" } }}
      >
        <div className={style.exam}>
          <div className={style.date}>
            <b>{this.props.exam.start_date}</b>
          </div>
          {this.state.showBtnEdit && (
            <button className={style.btnEdit} onClick={this.openModal}>
              <AiOutlineEdit />
            </button>
          )}
          <Modal
            isOpen={this.state.modalIsOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            style={{
              overlay: {
                position: "fixed",
                top: "40px",
                left: 0,
                right: 0,
                bottom: "50px",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
              },
              content: {
                position: "absolute",
                top: "40px",
                left: "40px",
                right: "40px",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
              },
            }}
          >
            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
            <EditExam
              closeAction={this.closeModal}
              editExam={this.props.exam}
              examId={this.props.examId}
            />
          </Modal>

          <div className={style.title}>
            <b>{this.props.exam.lesson + " - " + this.props.exam.class}</b>
          </div>
          <p className={style.description}>
            {this.props.exam.description &&
              "( " + this.props.exam.description + " )"}
          </p>
          <span className={style.duration}>
            <BiTime />
            {this.props.exam.duration + " мин"}
          </span>
          <span className={style.teacherName}>
            <IoPricetagOutline />
            {this.props.exam.price}
          </span>
          <span className={style.price}>
            <FaRegUser />
            <span style={{ marginLeft: "3px" }}>
              {this.props.exam.teacherName}
            </span>
          </span>
          {this.state.show3btn && (
            <Fragment>
              <a
                className={style.btnStart}
                href={this.props.exam.examUrl}
                target="_blank"
                rel="noreferrer"
              >
                Эхлэх
              </a>
              <a
                className={style.btnCalc}
                href={this.props.exam.calcUrl}
                target="_blank"
                rel="noreferrer"
              >
                Бодолт
              </a>
              <a
                className={style.btnRes}
                href={this.props.exam.resUrl}
                target="_blank"
                rel="noreferrer"
              >
                Дүн харах
              </a>
            </Fragment>
          )}
          {this.state.showPayBtn && (
            <button className={style.btnPay} onClick={this.openModal1}>Төлбөр төлөх</button>
          )}
           <Modal
            isOpen={this.state.modalIsOpen1}
            //onAfterOpen={afterOpenModal}
            onRequestClose={this.closeModal1}
            style={customStyles}
            contentLabel="Example Modal"
            style={{
              overlay: {
                position: "fixed",
                top: "40px",
                margin:"auto",
                bottom: "50px",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
              },
              content: {
                position: "absolute",
                top: "40px",
                left: "10%",
                right: "10%",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
              },
            }}
          >
           <h3>Төлбөр төлөх</h3>
           <p>Эрхэм хэрэглэгч <span className={style.boldtext}> {this.props.firstName}</span> та  <span className={style.boldtext}>
              {this.props.exam.lesson}- ын </span>
            хичээлийн шалгалтын төлбөрийг төлсөнөөр шалгалт өгөх эрх тань нээгдэх болно.
            </p>
            <p>Төлбөр төлхийг хүсвэл доорх дансны дугаар руу </p>
            <p className={style.bankNumber}>Хаан банк: </p>
            <p className={style.bankNumber}>Голомт банк: </p>
            <span className={style.redtext}>Гүйлгээний утга: {this.props.register} {this.props.exam.lesson} Холбоо барих утасны дугаар</span> 
            </Modal>
          {this.state.showTimeInfo && (
            <span className={style.timeLimit}>Эхлэх хугацаа болоогүй.</span>
          )}
        </div>
      </IconContext.Provider>
    );
  }
}
const mapStateToProps = (state) => {
  const paymentLesson = state.paymentReducer.paymentdata.map(
    (el) => el[1].lesson
  );
  return {
    payments: paymentLesson,
    teacherId: state.signupReducer.userId,
    register:state.signupReducer.register,
    firstName:state.signupReducer.firstname,
  };
};
export default connect(mapStateToProps)(Exam);
