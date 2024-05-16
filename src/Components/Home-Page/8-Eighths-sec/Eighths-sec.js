import React from "react";
import "./Eighths-sec.css";
import { Link } from "react-router-dom";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";

export default function EighthsSec() {
  const eighthSecContent = HomePageData.map((item) => item.EighththSec)[0];

  return (
    <div className="eighths-sec">
      <div className="container">
        <div className="upper-div">
          <span>{eighthSecContent.title.span1}</span>
          <span>{eighthSecContent.title.span2}</span>
        </div>
        <div className="lower-div">
          {eighthSecContent.Cards.map((card, cardIndex) => (
            <div className="card-div" key={cardIndex}>
              <div className="card-top">
                <div
                  className="card-top-img"
                  style={{ background: `url(${card.cardImage})` }}></div>
              </div>
              <div className="card-bottom">
                <div className="card-details">
                  <div className="card-span">
                    <span>{card.spans.span1}</span>
                    <span>{card.spans.span2}</span>
                  </div>
                  <span className="h2">{card.tittle} </span>
                  <p>{card.p}</p>
                  <Link className="link">{card.button}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
