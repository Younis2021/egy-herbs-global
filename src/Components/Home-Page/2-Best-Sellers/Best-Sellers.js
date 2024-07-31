import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Best-Sellers.css";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";

export default function BestSellers() {
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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    // Remove triggerOnce to trigger animation every time the component enters view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    swiperRef.current = new Swiper(".sec-sec", {
      spaceBetween: 30,
      centeredSlides: true,
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const bestSellersContents = HomePageData.map((item) => item.BestSellers);

  return (
    <div className="best-sellers">
      {bestSellersContents.map((bestSellersContent, index) => (
        <motion.div
          className="swiper-container sellers sec-sec home-sellers"
          key={index}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <div className="heading">
            <h3>{bestSellersContent.title}</h3>
          </div>
          <div className="swiper-wrapper ss">
            {/* Repeat structure for each card */}
            {bestSellersContent.cards.map((card, cardIndex) => (
              <motion.div
                className="swiper-slide card"
                key={cardIndex}
                variants={{
                  hidden: { opacity: 0, y: card.y },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <div className="card-image">
                  <img src={card.cardImage} alt="" />
                </div>
                <div className="card-bottom">
                                  <div className="card-text">
                  <span>{card.cardText.span}</span>
                  <h2>{card.cardText.h2}</h2>
                </div>
                <div className="details">
                  <div>
                    <StarRating rating={card.cardDetails.rating} />{" "}
                    {/* Add star rating component */}
                    <Reviewing reviews={[card.cardDetails.reviewing]} />
                  </div>
                  <Pricing prices={[card.cardDetails.pricing]} />
                  <Link to={card.link} className="button">
                    {card.button}
                  </Link>
                </div>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
