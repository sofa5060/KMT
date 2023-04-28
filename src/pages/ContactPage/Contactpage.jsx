import React, { useEffect } from "react";
import "./Contactpage.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Contactform from "../../components/ContactForm/Contactform";

export default function Contactpage({ setCurrPage }) {
  useEffect(() => {
    setCurrPage("contact");
  }, []);

  return (
    <div className="contact-page">
      <div className="left-col">
        <div className="section">
          <h3>Chat with us</h3>
          <p>Instant Support for Your Travel Needs</p>
          <div className="row">
            <EmailIcon />
            <a href="mailto:info@kmttoursegypt.com" className="text">
              info@kmttoursegypt.com
            </a>
          </div>
        </div>
        <div className="section">
          <h3>Visit us</h3>
          <p>Meet Our Travel Experts in Person</p>
          <div className="row">
            <LocationOnIcon />
            <p className="text">
              8 Gawad Housny, st، Abdeen, Cairo Governorate 4280143
            </p>
          </div>
        </div>
        <div className="section">
          <h3>Call us</h3>
          <p>Speak to Our Travel Experts Today</p>
          <div className="row">
            <PhoneIcon />
            <a href="tel:+20223918470" className="text">
              (+20) 2 23918470
            </a>
          </div>
        </div>
      </div>
      <div className="divider">
        <hr />
        <h4>OR</h4>
        <hr />
      </div>
      <Contactform />
    </div>
  );
}
