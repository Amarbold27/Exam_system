<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import { ExamContainer } from "./components/exam-container";
function App() {
  return (
    <div className="App">
      <ExamContainer />
=======
import logo from './logo.svg';
import './App.css';
import {Navbar} from './components';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
          <Switch>
            <Route path='/' exact component = {Navbar}/>
            <Route path='exam' exact component = {Navbar}/> 
            <Route path='/eesh' exact component = {Navbar}/>
            <Route path='/high-grade' exact component = {Navbar}/>
            <Route path='/mid-grade' exact component = {Navbar}/>
            <Route path='/log-in' exact component = {Navbar}/>
          </Switch>
        </Router>     
>>>>>>> 60637b0d2f50907effe11586383a5539df33d42e
    </div>
  );
}
export default App;
