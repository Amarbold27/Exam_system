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
    </div>
  );
}
export default App;
