import React from "react";
import "./Third-Sec.css";
import { AboutData } from "../AboutData/AboutData";

export default function ThirdSec() {
  const ThirdSecContent = AboutData.map((item) => item.ThirdSec)[0];

  return (
    <div className="Third-Sec">
      <div className="container">
        <div className="left-div">
          <img src={ThirdSecContent.Left.backgroundImage} alt="" />
        </div>
        <div className="right-div">
          <span className="h2">{ThirdSecContent.Right.h2}</span>
          <p>{ThirdSecContent.Right.p}</p>
        </div>
      </div>
    </div>
  );
}
