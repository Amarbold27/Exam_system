import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Reset from "./components/reset/index.jsx"
import  AddExam  from "./components/add-exam";
import Login from "./components/login/index.jsx";
import LogOut from "./components/LogOut";
import Register from "./components/register/index";
import HighClassExams from "./components/highclass";
import adminPay from "./components/admin-pay";
import Footer from "./components/footer"
import Homepage from "./components/homepage"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/exam" exact component={AddExam} />
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
          <Route path="/reset" exact component={Reset}/>
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
          <Route path="/" exact component={adminPay} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
