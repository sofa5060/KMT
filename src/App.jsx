import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar currPage={'home'}/>
      <Switch>
        <Route path='/' exact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;