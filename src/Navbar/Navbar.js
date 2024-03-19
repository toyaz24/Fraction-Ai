import React, { useState } from "react";
import FrictionIcon from "../../src/Assets/FrictionIcon.svg";
import "./navbar.css";
import CkHamburger from "../../src/Assets/CkHamburger.svg"

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleHamburgerClose = () => {
    setIsExpanded(false);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-container">
      <div className="container-fluid justify-content-space-between">
        <div className="d-flex align-items-center">
          <img src={FrictionIcon} alt="Friction Ai" className="me-2 fracction-mobile-icon" />
          <a className="navbar-brand fraction-ai-text" href="#">
            Fraction AI
          </a>
        </div>       

        {isExpanded ? (
          <img
            src={CkHamburger}
            alt="Close Hamburger"
            className="close-hamburger-icon"
            onClick={handleHamburgerClose}
          />
        ) : (
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}

        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-custom-class">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <div className="bookDemo">
            <button className="btn btn-primary rounded-pill bookdemo-btn-bg-color">Book Demo</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
