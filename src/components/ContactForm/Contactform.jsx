import React from "react";
import "./Contactform.css";
import TextField from "@mui/material/TextField";

export default function Contactform() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-form">
      <h2>Connect with KMT Tours Get in Touch Today!</h2>
      <p>
        Whether you have questions about our tours, want to request a quote, or
        simply need more information about traveling to Egypt, we're here to
        help. Our team of friendly and knowledgeable travel experts is available
        to assist you with all your travel needs. Contact us today and let us
        help you plan an unforgettable trip to Egypt!
      </p>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <TextField label="First Name" required fullWidth/>
          <TextField label="Last Name" required fullWidth/>
        </div>
        <TextField label="Email Address" type="email" required fullWidth/>
        <TextField label="Write Your Messeage" multiline required fullWidth/>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
