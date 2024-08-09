import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import StarRating from "../StarRating/StarRating";
import "./Forth-Sec.css";
import { HomePageData } from "../Home-Page-Data/Home-Page-Data";
import NewsLetterCard from "./NewsLetterCard/NewsLetterCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ForthSec() {
  const fothSecContent = HomePageData.map((item) => item.ForthSec.title)[0];
  const fothSecContentCard = HomePageData.map(
    (item) => item.ForthSec.newsLetterCards
  )[0];

  const swiperRef = useRef(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    // Remove triggerOnce to trigger animation every time the component enters view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      spaceBetween: 5,
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

  return (
    <div className="sec-4">
      <div className="container-4">
        <div className="text-4">
          <StarRating rating={5} />
          <p className="star-p">{fothSecContent}</p>
          <div className="controllers-div"></div>
        </div>
        <div className="newsletter-div">
          <motion.div
            className="swiper-container sellers"
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
            <div className="swiper-wrapper ss">
              {fothSecContentCard.map((card) => (
                <NewsLetterCard key={card.id} {...card} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
