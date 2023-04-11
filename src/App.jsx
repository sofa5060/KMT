import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Homepage from './pages/HomePage/Homepage';
import Trippage from './pages/TripPage/Trippage';
import Scrolltotop from './scrolltotop';
import TripContextProvider from './context/TripContextProvider';
import Searchpage from './pages/SearchPage/Searchpage';

const App = () => {
  return (
    <Router>
      <Navbar currPage={'home'}/>
      <Scrolltotop />
      <TripContextProvider>
        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/trip/:tripID' exact>
            <Trippage />
          </Route>
          <Route path='/search/:tripName' exact>
            <Searchpage />
          </Route>
        </Switch>
      </TripContextProvider>
    </Router>
  );
}

export default App;