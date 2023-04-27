import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Navbar.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';

export default function Navbar({ currPage }) {
  const [language, setLanguage] = useState("EN");
  return (
    <div className="navbar-background">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="navbar-list">
          <li>
            <Link to="/" className={currPage === "home" ? "main" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/trips" className={currPage === "trips" ? "main" : ""}>
              Trips
            </Link>
          </li>
          <li>
            <Link to="/about" className={currPage === "about" ? "main" : ""}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={currPage === "contact" ? "main" : ""}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="navbar-language">
          <FormControl variant="standard" sx={{ m: 1 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              label="Language"
              disableUnderline={true}
            >
              <MenuItem value="EN">EN</MenuItem>
              <MenuItem value="ES">ES</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
