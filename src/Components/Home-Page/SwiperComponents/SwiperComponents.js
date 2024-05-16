// SwiperComponent.js
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default function SwiperComponent({ children }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      spaceBetween: 5,
      centeredSlides: true,
    });
  }, []);

  return <div className="swiper-container">{children}</div>;
}



