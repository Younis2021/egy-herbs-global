import React from "react";
import "./Third-Sec.css";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";
import { Link } from "react-router-dom";

export default function ThirdSec() {
  const thirdSecContent = HomePageData.map((item) => item.ThirdSec)[0];
  return (
    <div className="third-sec">
      <div className="container">
        <div
          className="left-div"
          style={{ background: `url(${thirdSecContent.backGroundImg})` }}></div>
        <div className="right-div-container">
          <div className="right-div">
            <p className="top">{thirdSecContent.text.paragraph.p1}</p>
            <h1 className="tittle">{thirdSecContent.text.h1}</h1>
            <p className="paragraph">{thirdSecContent.text.paragraph.p2}</p>
            <Link to={thirdSecContent.button.link} className="btn">
              {thirdSecContent.button.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
