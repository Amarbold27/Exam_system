import "./App.css";
import { Navbar } from "./components";
import { ExamContainer } from "./components/exam-container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AddExam } from "./components/add-exam";
import LoginTest from "./components/logintest";
import Login from "./components/login/index.jsx";
import SignUpTest from "./components/signuptest";
import LogOut from "./components/LogOut";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/*<Route path="/" >*/}
          <Route path="/exam" exact component={ExamContainer} />
          <Route path="/eesh" exact component={Navbar} />
          <Route path="/high-class" exact component={AddExam} />
          <Route path="/mid-class" exact component={SignUpTest} />
          <Route path="/log-in" exact component={Login} />
          <Route path="/log-out" exact component={LogOut} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
