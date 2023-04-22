import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../images/logo.svg"
import footer_image from "../../images/footer-image.png"

export default function Footer() {
  return (
    <div className="footer-outer">
      <div className="footer-clip"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h2>Ready to get started?</h2>
            <div className="m-left">
              <Link to="/trips" className="btn footer-btn">
                Get Started with KMT Tours
              </Link>
              <div className="row location">
                <LocationOnIcon />
                <p className="text">
                  8 Gawad Housny st, Abdeen, Cairo Governorate 4280143
                </p>
              </div>
              <div className="row space-between">
                <div className="row">
                  <PhoneIcon />
                  <a href="tel:+0223918470" className="text">
                    (+20) 2 2391 8470
                  </a>
                </div>
                <div className="row">
                  <EmailIcon />
                  <a href="mailto:Info@kmttoursegypt.com" className="text">
                    Info@kmttoursegypt.com
                  </a>
                </div>
              </div>
              <div className="social-media">
                <p>Social Media</p>
                <div className="social-media-links">
                  <a
                    href="https://www.facebook.com/KMTToursEgypt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://twitter.com/kmttoursegypt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/kmttoursegypt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://www.youtube.com/company/kmttoursegypt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <YouTubeIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/kmttoursegypt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-image">
              <div className="mask mask-1"></div>
              <div className="mask mask-2"></div>
              <div className="mask mask-3">
                <img src={footer_image} alt="" />
              </div>
            </div>
            <div className="footer-logo">
              <img src={logo} alt="KMT Tours Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
