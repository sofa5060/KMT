import React, { useEffect } from "react";
import Quotepageform from "../../components/QuotePageForm/Quotepageform";
import "./Quotepage.css";
import quote_background from "../../images/quote_background.png";

export default function Quotepage({ setCurrPage }) {
  useEffect(() => {
    setCurrPage("quote");
  }, []);

  return (
    <div className="quote-page">
      <div className="background">
        <img src={quote_background} alt="" />
      </div>
      <div className="form-container">
        <h1>Request a Quote</h1>
        <p className="quote-text">
          At KMT Tours, we understand that every traveler has different needs
          and preferences when it comes to planning their trip to Egypt. That's
          why we offer a customized tour experience that's tailored to your
          specific requirements. To receive a personalized quote for your trip,
          simply fill out our request form and we'll get back to you with a
          customized itinerary and quote.
        </p>
        <div className="form-background">
          <Quotepageform />
        </div>
      </div>
    </div>
  );
}
