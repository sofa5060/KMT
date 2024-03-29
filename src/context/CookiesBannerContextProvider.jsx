import React, { createContext, useState, useEffect } from "react";
import { getAnalytics } from "firebase/analytics";
import { app } from "../index";
import reportWebVitals from "../reportWebVitals";

export const CookiesBannerContext = createContext();

const CookiesBannerContextProvider = ({ children }) => {
  const [accepted, setAccepted] = useState(false);

  const startAnalytics = () => {
    getAnalytics(app);
    reportWebVitals(console.log);
  };

  useEffect(() => {
    const userAccepted = localStorage.getItem("cookiesAccepted");
    if (userAccepted) {
      setAccepted(true);
      startAnalytics();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setAccepted(true);
    startAnalytics();
  };

  const rejectCookies = () => {
    localStorage.removeItem("cookiesAccepted");
    setAccepted(false);
  };

  return (
    <CookiesBannerContext.Provider
      value={{ accepted, acceptCookies, rejectCookies }}
    >
      {children}
    </CookiesBannerContext.Provider>
  );
};

export default CookiesBannerContextProvider;
