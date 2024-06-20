import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function NewsLetterCard({
  cardImage,
  span,
  span2,
  h2,
  p,
  signature,
  cardVideoUrl,
  cardVideoTittle,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    // Remove triggerOnce to trigger animation every time the component enters view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    // NewsletterCard.js
    <motion.div
      className="swiper-slide newsletter-card"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      {cardImage && (
        <div
          className="newsletter-img"
          style={{
            backgroundImage: `url(${cardImage})`,
          }}
        ></div>
      )}
      {cardImage && (
        <div className="newsletter-details">
          <div className="newsletter-span">
            <span>{span}</span>
            <span>{span2}</span>
          </div>
          <h2>{h2}</h2>
          <p>{p}</p>
          <span>{signature}</span>
        </div>
      )}
      {cardVideoUrl && (
        <div className="newsletter-img newsletter-video">
          <iframe
            title={cardVideoTittle}
            src={cardVideoUrl}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </motion.div>
  );
}
