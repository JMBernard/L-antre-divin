import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Tavern from './pages/Tavern';
import Fountain from './components/Fountain';
import Bar from './components/Bar';
import Table from './components/Table';
import Bedroom from './components/Bedroom';
import ExitPage from './pages/ExitPage';


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/tavern' component={Tavern}/>
          <Route path='/fountain' component={Fountain}/>
          <Route path='/bar' component={Bar}/>
          <Route path='/table' component={Table}/>
          <Route path='/bedroom' component={Bedroom}/>
          <Route path='/exit' component={ExitPage}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
