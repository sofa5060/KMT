import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Homepage from './components/HomePage/Homepage';

const App = () => {
  return (
    <Router>
      <Navbar currPage={'home'}/>
      <Switch>
        <Route path='/' exact>
        <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;