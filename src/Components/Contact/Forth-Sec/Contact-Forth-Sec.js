import React from "react";
import "./Contact-Forth-Sec.css";
import { Link } from "react-router-dom";

export default function ContactForthSec() {
  return (
    <div className="ContactForthSec">
      <div className="container">
        <div className="text-container">
          <h1>Mighty Plants, Mighty Lungs</h1>
          <p>Discover Our Line of Respiratory Support Products</p>
          <Link to="/" className="btn">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
