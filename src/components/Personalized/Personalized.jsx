import React from "react";
import { Link } from "react-router-dom";
import "./Personalized.css";
import bagTrip from "../../images/bagTrip.png";
import tape from "../../images/tape.svg";
import Quoteform from "../QuoteForm/Quoteform";

export default function Personalized() {
  return (
    <div className="personalized">
      <h2>
        Personalized Trips at <span>KMT Tours</span>
      </h2>
      <div className="row">
        <div className="left">
          <img src={tape} alt="" />
          <div className="content">
            <p>
              At <span>KMT Tours</span>, We understand that not everyone fits
              into a "one size fits all" travel package. That's why we offer
              personalized trips tailored to your unique interests, budget, and
              schedule. Whether you're a first-time visitor or a seasoned
              traveler
            </p>
            <Quoteform minimized />
          </div>
        </div>
        <div className="right">
          <img src={bagTrip} alt="planning trip" />
        </div>
      </div>
    </div>
  );
}
