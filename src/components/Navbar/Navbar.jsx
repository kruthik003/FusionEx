import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img className="image" src={Logo} alt="" />
      </Link>
      <div className="nav_content">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/venue">Venue</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Speakers</Link>
        <Link to="/partners">Partners</Link>
      </div>
      <a href="/contact">
        <button>Contact Us</button>
      </a>
    </div>
  );
};

export default Navbar;
