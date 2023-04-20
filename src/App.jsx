import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Homepage from './pages/HomePage/Homepage';
import Trippage from './pages/TripPage/Trippage';
import Scrolltotop from './scrolltotop';
import SearchContextProvider from './context/SearchContextProvider';
import Searchpage from './pages/SearchPage/Searchpage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar currPage={'home'}/>
      <Scrolltotop />
      <SearchContextProvider>
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
      </SearchContextProvider>
      <Footer />
    </Router>
  );
}

export default App;