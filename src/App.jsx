import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Scrolltotop from "./scrolltotop";
import SearchContextProvider from "./context/SearchContextProvider";
import Footer from "./components/Footer/Footer";
import React, { Suspense, useState } from "react";
import QuoteContextProvider from "./context/QuoteContextProvider";
import CheckoutContextProvider from "./context/CheckoutContextProvider";
import TripContextProvider from "./context/TripContextProvider";
import AlertContextProvider from "./context/AlertContextProvider";
import Alertbar from "./components/Alert/Alertbar";
import LanguageContextProvider from "./context/LanguageContextProvider";

const Homepage = React.lazy(() => import("./pages/HomePage/Homepage"));
const Trippage = React.lazy(() => import("./pages/TripPage/Trippage"));
const Searchpage = React.lazy(() => import("./pages/SearchPage/Searchpage"));
const Contactpage = React.lazy(() => import("./pages/ContactPage/Contactpage"));
const Quotepage = React.lazy(() => import("./pages/QuotePage/Quotepage"));
const Checkoutpage = React.lazy(() =>
  import("./pages/CheckoutPage/Checkoutpage")
);
const Aboutpage = React.lazy(() => import("./pages/AboutPage/Aboutpage"));
const Messagepage = React.lazy(() =>
  import("./components/MessagePage/Messagepage")
);

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
                  <Suspense fallback={<div></div>}>
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
                  </Suspense>
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
