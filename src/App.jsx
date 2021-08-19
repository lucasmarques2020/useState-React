import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';

export default function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
     <Switch>
       <Route path="/about"><Home></Home></Route>
       <Route path="/"><About></About></Route>
     </Switch>
     </Router>
    </div>
  );
};

