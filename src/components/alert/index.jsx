import React from "react";
import "react-dropdown/style.css";
import { connect } from "react-redux";
import "./styel.css";
import { BiErrorAlt} from "react-icons/all";
import * as action from "../../redux/actions/loginAction";
class Alertt extends React.Component {

    state = {
        isClick:false,
    };
  
  changeClick = () =>{
    this.setState({isClick:true});
    console.log(this.state.isClick);
  }
  render() {
    return (
        <>
        <div className="alert" style={{backgroundColor:this.props.color,display:this.state.isClick ? "none" : "block"}}>
        <span className="closebtn" onClick={this.changeClick}>&times;</span> 
            <strong>{this.props.errorName}! </strong>{this.props.msg}
        </div>
        
        </>
        );
  }
}


export default Alertt;
