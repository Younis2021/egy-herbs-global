import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FloatingActionButton.css";
import { Link } from "react-router-dom";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fab-container">
      <div className={`fab ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faPhone} size="2x" />
      </div>
      {isOpen && (
        <div className="fab-options">
          <Link to="https://wa.me/YOUR_NUMBER">
            <div className="fab-option whats-app">
              <FontAwesomeIcon icon={faWhatsapp} size="3x" />
            </div>
          </Link>
          <Link to="tel:YOUR_PHONE_NUMBER">
            <div className="fab-option tele-phone">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </div>
          </Link>
          <Link to="mailto:YOUR_EMAIL">
            <div className="fab-option e-mail">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
