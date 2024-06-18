import React from "react";
import "./Third-Sec.css";
import { Link } from "react-router-dom";

export default function ThirdSec({
  backGroundImg,
  p1,
  h1,
  p2,
  link,
  text,
  navLinks,
}) {
  return (
    <div className="third-sec">
      <div className="container">
        <div
          className="left-div"
          style={{ background: `url(${backGroundImg})` }}
        ></div>
        <div className="right-div-container">
          <div className="right-div">
            {p1 && <p className="top">{p1}</p>}
            <h1 className="tittle">{h1}</h1>
            <p className="paragraph">{p2}</p>
            {text && (
              <Link to={link} className="btn">
                {text}
              </Link>
            )}
            {navLinks && (
              <ul>
                {navLinks.map(({ text, link }) => (
                  <li>
                    <Link to={link} className="contact-third-link">
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
