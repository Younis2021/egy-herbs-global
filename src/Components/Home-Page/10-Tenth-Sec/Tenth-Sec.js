import React from "react";
import "./Tenth-Sec.css";
import { Link } from "react-router-dom";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";

export default function TenthSec() {
  const tenthSecContent = HomePageData.map((item) => item.TenthSec)[0];

  return (
    <div className="tenth-sec">
      <div className="container">
        <div className="lower-div">
          {tenthSecContent.map((card, cardIndex) => (
            <div className="card-div" key={cardIndex}>
              <div className="card-top">
                <div className="card-icon">
                  <img src={card.cardImage} alt="" />
                </div>
                <span className="card-title">{card.tittle}</span>
                <span className="card-paragraph">{card.p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
