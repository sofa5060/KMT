import React, { useState, useContext } from "react";
import "./Newsletter.css";
import newsletterIcon from "../../images/newsletterIcon.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import axios from "axios";
import { AlertContext } from "../../context/AlertContextProvider";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { showAlert } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res;
    try {
      await axios.post("http://localhost:5000/api/newsletter", {
        name,
        email,
      });
    } catch (e) {
      if(e.code !== "ERR_NETWORK" && e.response.status === 500){
        return showAlert("error", e.response.data);
      }

      return showAlert("error", "Error in submitting the form");
    }

    setName("");
    setEmail("");
    showAlert("success", "Submitted Successfully");
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
        <AnimationOnScroll
          animateOut="animate__headShake show"
          style={{ opacity: 1 }}
          offset={300}
          initiallyVisible
        >
          Get Exclusive Tour Offers and Tips
        </AnimationOnScroll>
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
          onChange={(e) => setName(e.target.value)}
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
