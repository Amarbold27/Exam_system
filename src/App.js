import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Reset from "./components/reset/index.jsx";
import AddExam from "./components/add-exam";
import Login from "./components/login/index.jsx";
import LogOut from "./components/LogOut";
import Register from "./components/register/index";
import HighClassExams from "./components/highclass";
import adminPay from "./components/admin-pay";
import React from "react";
import { connect } from "react-redux";
import * as actions from "./redux/actions/getUserInfoAction";
import * as actionLogOut from "./redux/actions/loginAction";
import AddNews from "./components/news/add-news";
import Home from "./components/homepage";
import News from "./components/news/news-article";
import NewsList from "./components/news/news-list";
//import editExam from "./components/edit-exam";

class App extends React.Component {
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    if (token && userId) {
      if (expireDate > new Date()) this.props.autoLogin(userId, token);
      else this.props.autoLogOut(expireDate.getTime() - new Date().getTime());
    }
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/exam" exact component={AddNews} />
            <Route
              path="/eec"
              exact
              component={() => <HighClassExams category={"ЭЕШ"} />}
            />
            <Route
              path="/high-class"
              exact
              component={() => <HighClassExams category={"Ахлах анги"} />}
            />
            <Route
              path="/mid-class"
              exact
              component={() => <HighClassExams category={"Дунд анги"} />}
            />
            <Route
              path="/lower-class"
              exact
              component={() => <HighClassExams category={"Бага анги"} />}
            />
            <Route path="/add-exam" exact component={AddExam} />
            <Route path="/payment" exact component={adminPay} />
            <Route path="/log-in" exact component={Login} />
            <Route path="/log-out" exact component={LogOut} />
            <Route path="/signup" exact component={Register} />
            <Route path="/reset" exact component={Reset} />
            <Route path="/news" exact component={NewsList} />
            <Route path="/news/:newsId" component={News} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (userId, token) => dispatch(actions.getUserInfo(userId, token)),
    logOut: () => dispatch(actionLogOut.logOut()),
    autoLogOut: (timems) => dispatch(actionLogOut.autoLogOut(timems)),
  };
};
export default connect(null, mapDispatchToProps)(App);
