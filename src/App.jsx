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
import { useState } from "react";
import Quotepage from "./pages/QuotePage/Quotepage";
import QuoteContextProvider from "./context/QuoteContextProvider";
import Checkoutpage from "./pages/CheckoutPage/Checkoutpage";
import CheckoutContextProvider from "./context/CheckoutContextProvider";
import Aboutpage from "./pages/AboutPage/Aboutpage";
import TripContextProvider from "./context/TripContextProvider";
import AlertContextProvider from "./context/AlertContextProvider";
import Alertbar from "./components/Alert/Alertbar";
import Messagepage from "./components/MessagePage/Messagepage";
import LanguageContextProvider from "./context/LanguageContextProvider";

const App = () => {
  const [currPage, setCurrPage] = useState("home");
  return (
    <Router>
      <LanguageContextProvider>
        <AlertContextProvider>
          <Alertbar />
          <TripContextProvider>
            <SearchContextProvider>
              <QuoteContextProvider>
                <CheckoutContextProvider>
                  <Navbar currPage={currPage} />
                  <Scrolltotop />
                  <Switch>
                    <Route path="/" exact>
                      <Homepage setCurrPage={setCurrPage} />
                    </Route>
                    <Route path="/quote" exact>
                      <Quotepage setCurrPage={setCurrPage} />
                    </Route>
                    <Route path="/trips" exact>
                      <Searchpage setCurrPage={setCurrPage} allTrips />
                    </Route>
                    <Route path="/trip/:tripID" exact>
                      <Trippage setCurrPage={setCurrPage} />
                    </Route>
                    <Route path="/search/:tripName">
                      <Searchpage setCurrPage={setCurrPage} />
                    </Route>
                    <Route path="/contact">
                      <Contactpage setCurrPage={setCurrPage} />
                    </Route>
                    <Route path="/checkout">
                      <Checkoutpage setCurrPage={setCurrPage} />
                    </Route>
                    <Route path="/about">
                      <Aboutpage setCurrPage={setCurrPage} />
                    </Route>
                    <Route path="*">
                      <Messagepage type="page404" />
                    </Route>
                  </Switch>
                </CheckoutContextProvider>
              </QuoteContextProvider>
            </SearchContextProvider>
            <Footer />
          </TripContextProvider>
        </AlertContextProvider>
      </LanguageContextProvider>
    </Router>
  );
};

export default App;
