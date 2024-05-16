import React from "react";

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
  return (
    // NewsletterCard.js
    <div className="swiper-slide newsletter-card">
      {cardImage && (
        <div
          className="newsletter-img"
          style={{
            backgroundImage: `url(${cardImage})`,
          }}></div>
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
            allowFullScreen></iframe>
        </div>
      )}
    </div>
  );
}
