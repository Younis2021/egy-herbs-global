import React from "react";
import "./Second-Sec.css";
import { AboutData } from "../AboutData/AboutData";

export default function SecondSec() {
  const secondSecContent = AboutData.map((item) => item.SecondSec)[0];
  return (
    <div className="Second-Sec">
      <div className="container">
        <div
          className="img-div"
          style={{
            background: `url(${secondSecContent.backgroundImage})`,
          }}></div>
        <div className="text-div">
          <span className="h1">{secondSecContent.spans.span2}</span>
          <p>{secondSecContent.p}</p>
        </div>
      </div>
    </div>
  );
}
