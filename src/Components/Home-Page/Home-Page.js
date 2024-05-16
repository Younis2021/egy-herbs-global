// homePage.js
import React, { useEffect, useRef, useState } from "react";
import "./Home-Page.css";
import Hero from "./1-Hero/Hero";
import BestSellers from "./2-Best-Sellers/Best-Sellers";
import ThirdSec from "./3-Third-Sec/Third-Sec";
import ForthSec from "./4-Forth-Sec/Forth-Sec";
import FifthSec from "./5-Fifth-Sec/Fifth-Sec";
import SixthSec from "./6-Sixth-Sec/Sixth-Sec";
import SeventhSec from "./7-Seventh-sec/Seventh-sec";
import EighthsSec from "./8-Eighths-sec/Eighths-sec";
import NinthSec from "./9-Ninth-Sec/Ninth-Sec";
import TenthSec from "./10-Tenth-Sec/Tenth-Sec";
import Footer from "./11-Footer/Footer";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && isVideoPlaying) {
      videoRef.current.play();
    }
  }, [isVideoPlaying]);

  const handleVideoClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  // Find the data for the fourth section

  // Render the components
  return (
    <div className="Home">
      <Hero />
      <BestSellers />
      <ThirdSec />

      <ForthSec />

      <FifthSec />
      <SixthSec />
      <SeventhSec />
      <EighthsSec />
      <NinthSec />
      <TenthSec />
      <Footer />
    </div>
  );
}
