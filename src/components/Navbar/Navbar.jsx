import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaInstagram, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div style={{ position: "relative" }}>
      <div className="navbar">
        <Link to={"/"}>
          <img src="/Logo Transparent.svg" alt="" width={70} height={70} />
        </Link>
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
      <div ref={menuRef} className={`offcanvas-menu ${isOpen ? "open" : ""}`}>
        <FaTimes className="close-icon" onClick={toggleMenu} />
        <ul>
          <li className="offcanvas-link">
            <Link onClick={toggleMenu} to="/">
              Home
            </Link>
          </li>
          <li className="offcanvas-link">
            <Link onClick={toggleMenu} to="/about">
              About
            </Link>
          </li>
          <li className="offcanvas-link">
            <Link onClick={toggleMenu} to="/events">
              Events
            </Link>
          </li>
          <li className="offcanvas-link">
            <Link onClick={toggleMenu} to="/chief_guests">
              Chief Guests
            </Link>
          </li>
          <li className="offcanvas-link">
            <Link onClick={toggleMenu} to="/partners">
              Partners
            </Link>
          </li>
          <li className="offcanvas-link">
            <Link onClick={toggleMenu} to="/passes">
              Grab Your Pass Now!
            </Link>
          </li>
        </ul>
        <div className="footer">
          <p>Follow Us On</p>
          <div className="handles">
            <a href="https://www.instagram.com/fusionex_2024/" className="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
