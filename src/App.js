import "./App.css";
import { Navbar } from "./components";
import { ExamContainer } from "./components/exam-container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/*<Route path="/" >*/}
          <Route path="/exam" exact component={ExamContainer} />
          <Route path="/eesh" exact component={Navbar} />
          <Route path="/high-class" exact component={ExamContainer} />
          <Route path="/mid-class" exact component={Navbar} />
          <Route path="/log-in" exact component={Navbar} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
