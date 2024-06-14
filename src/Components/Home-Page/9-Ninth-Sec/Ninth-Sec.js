// NinthSec.js
import React from "react";
import "./Ninth.css";

export default function NinthSec({ backgroundImage, spans, p, button }) {
  return (
    <div
      className="ninth-sec"
      style={{ background: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="text-div">
          {spans && <span>{spans.span1}</span>}
          <span className="h1">{spans.span2}</span>
          <p>{p}</p>
          {button && <button>{button}</button>}
        </div>
      </div>
    </div>
  );
}
