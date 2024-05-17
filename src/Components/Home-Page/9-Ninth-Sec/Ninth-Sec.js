import React from "react";
import "./Ninth.css";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";

export default function NinthSec() {
  const ninthSecContent = HomePageData.map((item) => item.NinthSec)[0];

  return (
    <div
      className="ninth-sec"
      style={{ background: `url(${ninthSecContent.backgroundImage})` }}>
      <div className="container">
        <div className="text-div">
          <span>{ninthSecContent.spans.span1}</span>
          <span className="h1">{ninthSecContent.spans.span2} </span>
          <p>{ninthSecContent.p}</p>
          <button>{ninthSecContent.button}</button>
        </div>
      </div>
    </div>
  );
}
