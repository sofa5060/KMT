import React from "react";
import correct from "../../images/correct.png";
import wrong from "../../images/wrong.png";
import { Link } from "react-router-dom";
import "./Messagepage.css"

export default function Messagepage({ type, orderID }) {
  if (type === "paymentSuccess") {
    return (
      <div className="message-container">
        <img src={correct} alt="correct operation" />
        <h2>Congratulations! You are All set</h2>
        <h3>Your Booking ID #{orderID}</h3>
        <p>
          Congratulations on completing booking your journey with KMT Tours! We hope you
          have an amazing time exploring the wonders of Egypt. Remember, your
          journey with us is not just a one-time experience, but a lifelong
          memory that you can cherish forever. We encourage you to keep
          exploring new destinations and experiencing new cultures, and we hope
          to be a part of your future travel plans. Stay adventurous and keep
          exploring with KMT Tours!
        </p>
        <Link to="/">Back Home</Link>
      </div>
    );
  }else if (type === "page404") {
    return (
      <div className="message-container" style={{marginTop: 100}}>
        <img src={wrong} alt="wrong operation" />
        <h2>Trip Not Found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">Back Home</Link>
      </div>
    );
  }
}
