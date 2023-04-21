import React, { useState } from "react";
import "./Newsletter.css";
import newsletterIcon from "../../images/newsletterIcon.png";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    setName(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Name: " + name + " Email: " + email);
  };

  return (
    <div className="newsletter">
      <div className="icon-background">
        <div className="icon">
          <img src={newsletterIcon} alt="" />
        </div>
      </div>
      <h3>
        <span>Unlock the Wonders of Egypt</span>
        <br />
        Get Exclusive Tour Offers and Tips
      </h3>
      <p>
        Our newsletter is a great way to stay connected with us and stay
        up-to-date on everything Egypt has to offer. Plus, as a subscriber,
        you'll be the first to hear about our exclusive promotions and
        discounts. Don't miss out - sign up today!
      </p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn">Subscribe</button>
      </form>
    </div>
  );
}
