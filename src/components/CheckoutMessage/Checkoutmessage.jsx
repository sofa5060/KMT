import React from "react";
import correct from "../../images/correct.png";
import { Link } from "react-router-dom";
import "./Checkoutmessage.css"

export default function Checkoutmessage({ type }) {
  if (type === "paymentSuccess") {
    return (
      <div className="container">
        <img src={correct} alt="correct operation" />
        <h2>Congratulations! You are All set</h2>
        <h3>Your Trip ID #123456789</h3>
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
  }
}
