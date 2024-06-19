import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FloatingActionButton.css";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fab-container">
      <div className={`fab ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faPhone} />
      </div>
      {isOpen && (
        <div className="fab-options">
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="fab-option">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </a>
          <a href="tel:YOUR_PHONE_NUMBER">
            <div className="fab-option">
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </a>
          <a href="mailto:YOUR_EMAIL">
            <div className="fab-option">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
