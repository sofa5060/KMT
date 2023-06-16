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
import logo from "../../images/logo.svg";
import footer_image from "../../images/footer-image.png";
import TikTokIcon from "../../images/tiktok.svg";
import tripadvisor from "../../images/tripadvisor.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import mc from "../../images/mc.svg";

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
                Explore KMT Trips
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
              <div className="row whats">
                <WhatsAppIcon />
                <a
                  href="https://api.whatsapp.com/send?phone=201142636629"
                  className="text"
                  target="_blank"
                  rel="noreferrer"
                >
                  (+20) 1142636629
                </a>
              </div>
              <div className="social-media">
                <p>Social Media</p>
                <div className="social-media-links">
                  <a
                    href="https://www.facebook.com/Kmt.egytours"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://www.tiktok.com/@kmt.egytours"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={TikTokIcon} alt="TikTok" />
                  </a>
                  <a
                    href="https://www.instagram.com/kmt.egytours"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://www.tripadvisor.com/Hotel_Review-g294201-d23751971-Reviews-Kmt_Hostel-Cairo_Cairo_Governorate.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={tripadvisor} alt="tripadvisor" />
                  </a>
                </div>
              </div>
              <div className="payments">
                <div className="payment">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    overflow="visible"
                    viewBox="0 0 1000 324.68"
                  >
                    <path
                      fill="#1434cb"
                      d="M651.19.5c-70.933 0-134.32 36.766-134.32 104.69 0 77.9 112.42 83.281 112.42 122.42 0 16.478-18.884 31.229-51.137 31.229-45.773 0-79.984-20.611-79.984-20.611l-14.638 68.547s39.41 17.41 91.734 17.41c77.552 0 138.58-38.571 138.58-107.66 0-82.316-112.89-87.536-112.89-123.86 0-12.908 15.502-27.052 47.663-27.052 36.287 0 65.892 14.99 65.892 14.99l14.326-66.204S696.623.502 651.194.502zM2.22 5.497L.502 15.49s29.842 5.461 56.72 16.356c34.606 12.493 37.071 19.765 42.9 42.354l63.51 244.83h85.137L379.93 5.5h-84.942L210.71 218.67l-34.39-180.7c-3.154-20.681-19.129-32.478-38.684-32.478H2.225zm411.87 0l-66.634 313.53h80.999l66.4-313.53H414.09zm451.76 0c-19.532 0-29.88 10.457-37.474 28.73l-118.67 284.8h84.942l16.434-47.467h103.48l9.993 47.467h74.948L934.118 5.497h-68.273zm11.047 84.707l25.178 117.65h-67.454l42.276-117.65z"
                    ></path>
                  </svg>
                </div>
                <div className="payment">
                  <img src={mc} alt="" />
                </div>
              </div>
              <div className="pages">
                <Link to="/terms">Terms & Conditions</Link>
                <Link to="/privacy">Privacy Policy</Link>
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
