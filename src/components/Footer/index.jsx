import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="left-side">
          <div className="register-button">
            Register today{" "}
            <FontAwesomeIcon icon={faMousePointer} className="mouse-pointer" />
          </div>
          <div className="social-media">
            <p>Follow Us:</p>
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </div>
        </div>
        <div className="right-side">
          <img src={Logo} alt="Event" className="event-image" />
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
