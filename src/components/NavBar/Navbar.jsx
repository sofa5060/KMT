import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import './Navbar.css'

export default function Navbar({currPage}) {
  return (
    <div className="navbar-background">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar-list">
          <li><Link to='/' className={currPage==="home" && "main"}>Home</Link></li>
          <li><Link to='/' className={currPage==="trips" && "main"}>Trips</Link></li>
          <li><Link to='/' className={currPage==="about" && "main"}>About Us</Link></li>
          <li><Link to='/' className={currPage==="contact" && "main"}>Contact Us</Link></li>
        </ul>
        <ul className="navbar-user">
          <li>
            <Link to='/'>LOGIN</Link>
          </li>
          <li>/</li>
          <li>
            <Link to='/'>SIGNUP</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
