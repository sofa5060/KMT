import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import logo2 from "../../images/logo2.svg";
import "./Navbar.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { LanguageContext } from "../../context/LanguageContextProvider";


export default function Navbar({ currPage }) {
  const [language, setLanguage] = useState("EN");
  const [open, setOpen] = useState(false);
  const { changeLanguage, contextLanguage, renderContent } = useContext(LanguageContext);

  const closeHandler = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
    changeLanguage(event.target.value);
  };

  useEffect(() => {
    setLanguage(contextLanguage);
  }, [contextLanguage]);

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
              {renderContent("Home", "Inicio", "Início")}
            </Link>
          </li>
          <li>
            <Link to="/trips" className={currPage === "trips" ? "main" : ""}>
              {renderContent("Trips", "Viajes", "Viagens")}
            </Link>
          </li>
          <li>
            <Link to="/about" className={currPage === "about" ? "main" : ""}>
              {renderContent("About Us", "Sobre Nosotros", "Sobre Nós")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={currPage === "contact" ? "main" : ""}
            >
              {renderContent("Contact Us", "Contáctenos", "Contate-nos")}
            </Link>
          </li>
        </ul>
        <div className="navbar-language">
          <FormControl variant="standard">
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={language}
              onChange={handleChange}
              label="Language"
              disableUnderline={true}
            >
              <MenuItem value="EN">EN</MenuItem>
              <MenuItem value="ES">ES</MenuItem>
              <MenuItem value="PT">PT</MenuItem>
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
                {renderContent("Home", "Inicio", "Início")}
              </Link>
            </li>
            <li>
              <Link
                to="/trips"
                className={currPage === "trips" ? "main" : ""}
                onClick={closeHandler}
              >
                {renderContent("Trips", "Viajes", "Viagens")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={currPage === "about" ? "main" : ""}
                onClick={closeHandler}
              >
                {renderContent("About Us", "Sobre Nosotros", "Sobre Nós")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={currPage === "contact" ? "main" : ""}
                onClick={closeHandler}
              >
                {renderContent("Contact Us", "Contáctenos", "Contate-nos")}
              </Link>
            </li>
          </ul>
          <div className="navbar-language">
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={language}
                onChange={handleChange}
                label="Language"
                disableUnderline={true}
              >
                <MenuItem value="EN">EN</MenuItem>
                <MenuItem value="ES">ES</MenuItem>
                <MenuItem value="PT">PT</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
