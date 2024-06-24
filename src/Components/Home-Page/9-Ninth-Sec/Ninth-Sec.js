// NinthSec.js
import React from "react";
import "./Ninth.css";
import { Link } from "react-router-dom";

export default function NinthSec({ backgroundImage, spans, p, button, link }) {
  return (
    <div
      className="ninth-sec"
      style={{ background: `url(${backgroundImage})` }}
    >
      <div className="glass">
        <div className="container">
          <div className="text-div">
            {spans && <span>{spans.span1}</span>}
            <spans className="h1">{spans.span2}</spans>
            <p>{p}</p>
            {button && (
              <Link className="btn" to={link}>
                {button}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
