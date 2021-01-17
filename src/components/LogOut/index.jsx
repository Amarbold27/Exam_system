import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginAction";
import { Redirect } from "react-router-dom";

class LogOut extends React.Component {
  componentDidMount = () => {
    this.props.logout();
  };
  render() {
    return <Redirect to="/log-in" />;
  }
}
const dispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logOut()),
  };
};
export default connect(null, dispatchToProps)(LogOut);
