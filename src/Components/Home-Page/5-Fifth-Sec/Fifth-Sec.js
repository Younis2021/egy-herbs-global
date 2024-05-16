import React from "react";
import "./Fifth-Sec.css";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";

export default function FifthSec() {
  const fifthSecContent = HomePageData.map((item) => item.FifhSec)[0];

  return (
    <div className="fifth-sec">
      <div className="container">
        <div
          className="left-div"
          style={{ background: `url(${fifthSecContent.backGroundImg})` }}></div>
        <div
          className="right-div-container"
          style={{ background: `url(${fifthSecContent.backGroundStiker})` }}>
          <div className="right-div">
            <p className="top">{fifthSecContent.text.paragraph.p1}</p>
            <h1 className="tittle">{fifthSecContent.text.h1}</h1>
            <p className="paragraph">{fifthSecContent.text.paragraph.p2}</p>
            <p className="paragraph">{fifthSecContent.text.paragraph.p3}</p>
            <button className="btn">{fifthSecContent.button}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
