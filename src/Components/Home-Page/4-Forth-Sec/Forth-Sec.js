import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import StarRating from "../StarRating/StarRating";
import "./Forth-Sec.css";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";
import NewsLetterCard from "./NewsLetterCard/NewsLetterCard";

export default function ForthSec() {
  const fothSecContent = HomePageData.map((item) => item.ForthSec.title)[0];
  const fothSecContentCard = HomePageData.map(
    (item) => item.ForthSec.newsLetterCards
  )[0];

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      spaceBetween: 5,
      centeredSlides: true,
    });
  }, []);

  return (
    <div className="sec-4">
      <div className="container-4">
        <div className="text-4">
          <StarRating rating={5} />
          <p>{fothSecContent}</p>
          <div className="controllers-div"></div>
        </div>
        <div className="newsletter-div">
          <div className="swiper-container sellers">
            <div className="swiper-wrapper ss">
              {fothSecContentCard.map((card) => (
                <NewsLetterCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
