import React from "react";
import { Link } from "react-router-dom";
import "./Personalized.css";
import personalizedImage from "../../images/personalizedImage.png";

export default function Personalized() {
  return (
    <div className="personalized">
      <h2>Personalized Trips at <span>KMT Tours</span></h2>
      <div className="row">
        <div className="left">
          <img src={personalizedImage} alt="planning trip"/>
        </div>
        <div className="right">
          <p>
            At <span>KMT Tours</span>, we understand that not everyone fits into a "one size
            fits all" travel package. That's why we offer personalized trips
            tailored to your unique interests, budget, and schedule. Whether
            you're a first-time visitor or a seasoned traveler, our team of
            experts will work with you to design a custom itinerary that exceeds
            your expectations.
          </p>
          <p>
            Let us create a custom itinerary based on your interests, budget,
            and schedule. Our team of experts will work with you to design a
            bespoke itinerary that reflects your preferences and ensures an
            unforgettable trip. Contact us today to start planning your dream
            trip to Egypt!
          </p>
          <Link to="/request-quote" className="btn animate__animated animate__pulse animate__infinite">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
