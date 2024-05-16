import React from "react";
import "./Seventh-Sec.css";
import { Link } from "react-router-dom";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";

export default function SeventhSec() {
  const seventhSecContent = HomePageData.map((item) => item.SeventhSec)[0];

  return (
    <div className="seventh-sec">
      <div className="container">
        <div className="upper-div">
          <span>{seventhSecContent.title}</span>
        </div>
        <div className="lower-div">
          {seventhSecContent.Cards.map((card, cardIndex) => (
            <div className="card-div" key={cardIndex}>
              <div className="card-top">
                <div className="card-icon">
                  <img src={card.cardImage} alt="" />
                </div>
                <div className="card-tittle">{card.tittle}</div>
                <div className="card-paragraph">{card.p}</div>
              </div>
              <div className="card-bottom">
                <Link className="link">{card.button}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
