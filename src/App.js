import "./App.css";
import { Navbar } from "./components";
import { Header } from "./components";

import { ExamContainer } from "./components/exam-container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact component={ExamContainer}  /> */}
          <Route path="/exam" exact component={ExamContainer} />
          <Route path="/exam" exact component={ExamContainer} />
          <Route path="/high-class" exact component={ExamContainer} />
          <Route path="/mid-class" exact component={Navbar} />
          <Route path="/log-in" exact component={Header} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
