// Product-Card.js
import { BiSolidStar } from "react-icons/bi";
import "./Product-Card.css";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { HomePageData } from "../../Home-Page/Home-Page-Data/Home-Page-Data";
import { useState } from "react";

export default function ProductCard() {
  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<BiSolidStar style={{ color: "#eba937" }} key={i} />);
    }
    return <span className="rating">{stars}</span>;
  };

  const Pricing = ({ prices }) => {
    return prices.map((p, index) => (
      <span key={index} className="pricing">
        ${p}
      </span>
    ));
  };

  const Reviewing = ({ reviews }) => {
    return reviews.map((r, index) => (
      <span key={index} className="reviewing">
        {r} Reviews
      </span>
    ));
  };

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".sec-sec", {
      spaceBetween: 0,
      centeredSlides: true,
      mousewheel: true, // Allow mousewheel scrolling
    });
  }, []);

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const bestSellersContents = HomePageData.map((item) => item.BestSellers);

  return (
    <div className="best-sellers">
      {bestSellersContents.map((bestSellersContent, index) => (
        <div className="swiper-container sellers sec-sec" key={index}>
          <div className="swiper-wrapper ss">
            {/* Repeat structure for each card */}
            {bestSellersContent.cards.map((card, cardIndex) => (
              <div
                className="swiper-slide card"
                key={cardIndex}
                onMouseEnter={() => setHoveredCardIndex(cardIndex)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <div className="card-image">
                  <img src={card.cardImage} alt="" />
                </div>
                <div className="card-text">
                  <h2>{card.cardText.h2}</h2>
                </div>
                <div className="details">
                  <div>
                    <StarRating rating={card.cardDetails.rating} />{" "}
                    {/* Add star rating component */}
                    <Reviewing reviews={[card.cardDetails.reviewing]} />
                  </div>
                  <span>{card.cardText.span}</span>
                  <Pricing prices={[card.cardDetails.pricing]} />
                  <button
                    style={{
                      opacity: hoveredCardIndex === cardIndex ? 1 : 0,
                    }}
                  >
                    {card.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
