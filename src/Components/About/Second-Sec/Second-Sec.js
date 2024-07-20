import React from "react";
import "./Second-Sec.css";
import { AboutData } from "../AboutData/AboutData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function SecondSec() {
  const secondSecContent = AboutData.map((item) => item.SecondSec)[0];

  return (
    <div className="Second-Sec">
      <div className="container">
        <div className="about-upper-text">
          <div className="about-icons">
            <Link to="/" className="about-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to="/" className="about-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="/" className="about-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="/" className="about-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
          <h1 className="h1">Doing Good, Works.</h1>
          <p>
            Now more than 40,000 member-owners strong, we’re dedicated to
            sourcing the highest quality spices, herbs and botanical products
            through our Frontier Co-op®, Simply Organic® and Aura Cacia® brands
            — all while creating life-changing opportunities for our growers,
            employees and their families. We’re driven by a simple purpose: to
            do good by our people and planet. And to create a stronger company
            built on a commitment to quality and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}
