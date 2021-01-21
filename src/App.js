import "./App.css";
import { Navbar } from "./components";
import { ExamContainer } from "./components/exam-container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reset from "./components/reset/index.jsx"
import  AddExam  from "./components/add-exam";
//import LoginTest from "./components/logintest";
import Login from "./components/login/index.jsx";
import SignUpTest from "./components/signuptest";
import LogOut from "./components/LogOut";
import Register from "./components/register/index";
import { LessonList } from "./components/lesson-list";
import adminPay from "./components/admin-pay";
import Home from "./components/home";

function App() {
  const lessons = [
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
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/*<Route path="/" >*/}
          <Route
            path="/exam"
            exact
            component={() => <ExamContainer lessons={lessons} />}
          />
          <Route
            path="/eec"
            exact
            component={() => <LessonList lessons={lessons} />}
          />
          <Route path="/high-class" exact component={AddExam} />
          <Route path="/mid-class" exact component={SignUpTest} />
          <Route path="/log-in" exact component={Home} />
          <Route path="/log-out" exact component={LogOut} />
          <Route path="/signup" exact component={Register} />
          <Route path="/payment" exact component={adminPay} />
          <Route path="/reset" exact component={Reset}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;