import React from "react";
import "./Sixth-Sec.css";
import { BiSolidStar } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";

export default function SixthSec() {
  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<BiSolidStar style={{ color: "#9ba839" }} key={i} />);
    }
    return <span className="rating">{stars}</span>;
  };

  const sixthSecContent = HomePageData.map((item) => item.SixthSec)[0];

  return (
    <div className="sixth-sec">
      <div className="container">
        <div className="right-div-container">
          <div className="right-div">
            <div className="rating-div">
              <span>4.8</span>
              <StarRating rating={5} /> {/* Add star rating component */}
            </div>
            <h1 className="tittle">{sixthSecContent.text.h1}</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}>
              <p className="top">{sixthSecContent.text.paragraph.p1}</p>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <p className="paragraph">
              {sixthSecContent.text.paragraph.p2}
              <span style={{ display: "block", fontWeight: "900" }}>
                {sixthSecContent.text.paragraph.span}
              </span>
              $126 Value → $99
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}>
              <p className="top">{sixthSecContent.text.paragraph.p3}</p>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <p className="paragraph"></p>
            <button className="btn">{sixthSecContent.button}</button>
          </div>
        </div>
        <div
          className="left-div"
          style={{ background: `url(${sixthSecContent.backGroundImg})` }}></div>
      </div>
    </div>
  );
}
