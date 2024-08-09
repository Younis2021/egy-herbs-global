import React from "react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "./Hero.css";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";

export default function Hero() {
  // Assuming HomePageData is an array of objects containing Hero data
  const heroContent = HomePageData.map((item) => item.Hero)[0];

  return (
    <div
      className="swiper-container hero"
      style={{ background: `url(${heroContent.backGroundImg})` }}
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="control-div">
            <div className="home-text">
              <div className="heading">
                <h1 className="heading">{heroContent.heading.title}</h1>
                <p className="heading-2">{heroContent.heading.slogan}</p>
              </div>
              <Link to={heroContent.button.link} className="btn">
                {heroContent.button.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
