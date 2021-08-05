import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Tavern from './pages/Tavern';
import Fountain from './components/Fountain';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/tavern' component={Tavern}/>
          <Route path='/fountain' component={Fountain}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
