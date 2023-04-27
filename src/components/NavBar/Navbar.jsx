import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import logo2 from "../../images/logo2.svg";
import "./Navbar.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ currPage }) {
  const [language, setLanguage] = useState("EN");
  const [open, setOpen] = useState(false);

  const closeHandler = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="navbar-background">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="hide-sm"/>
            <img src={logo2} alt="logo" className="show-sm"/>
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
          <FormControl variant="standard">
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
        <div className="navbar-hamburger">
          <MenuIcon onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* Mobile Navbar */}
      <Drawer anchor="right" open={open} onClose={closeHandler}>
        <div className="mobile-navbar">
          <img src={logo2} alt="" />
          <ul className="navbar-list">
            <li>
              <Link
                to="/"
                className={currPage === "home" ? "main" : ""}
                onClick={closeHandler}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/trips"
                className={currPage === "trips" ? "main" : ""}
                onClick={closeHandler}
              >
                Trips
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={currPage === "about" ? "main" : ""}
                onClick={closeHandler}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={currPage === "contact" ? "main" : ""}
                onClick={closeHandler}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="navbar-language">
            <FormControl variant="standard">
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
      </Drawer>
    </div>
  );
}
