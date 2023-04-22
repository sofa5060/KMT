import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import Trippage from "./pages/TripPage/Trippage";
import Scrolltotop from "./scrolltotop";
import SearchContextProvider from "./context/SearchContextProvider";
import Searchpage from "./pages/SearchPage/Searchpage";
import Footer from "./components/Footer/Footer";
import Contactpage from "./pages/ContactPage/Contactpage";
import {useState} from "react";

const App = () => {
  const [currPage, setCurrPage] = useState("home");
  return (
    <Router>
      <Navbar currPage={currPage} />
      <SearchContextProvider>
        <Scrolltotop />
        <Switch>
          <Route path="/" exact>
            <Homepage setCurrPage={setCurrPage}/>
          </Route>
          <Route path="/trips" exact>
            <Searchpage setCurrPage={setCurrPage} allTrips/>
          </Route>
          <Route path="/trip/:tripID" exact>
            <Trippage setCurrPage={setCurrPage}/>
          </Route>
          <Route path="/search/:tripName">
            <Searchpage setCurrPage={setCurrPage}/>
          </Route>
          <Route path="/contact">
            <Contactpage setCurrPage={setCurrPage}/>
          </Route>
        </Switch>
      </SearchContextProvider>
      <Footer />
    </Router>
  );
};

export default App;
