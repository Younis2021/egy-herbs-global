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
import { HomePageData } from "./Home-Page-Data/Home-Page-Data";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && isVideoPlaying) {
      videoRef.current.play();
    }
  }, [isVideoPlaying]);

  const ninthSecContent = HomePageData[0].NinthSec;
  const thirdSecContent = HomePageData[0].ThirdSec;

  return (
    <div className="Home">
      <Hero />
      <BestSellers />
      <ThirdSec
        backGroundImg={thirdSecContent.backGroundImg}
        p1={thirdSecContent.p1}
        h1={thirdSecContent.h1}
        p2={thirdSecContent.p2}
        link={thirdSecContent.buttonLink}
        text={thirdSecContent.buttonText}
      />

      <ForthSec />

      <FifthSec />
      <SixthSec />
      <SeventhSec />
      <EighthsSec />
      <NinthSec
        backgroundImage={ninthSecContent.backgroundImage}
        spans={ninthSecContent.spans}
        p={ninthSecContent.p}
        button={ninthSecContent.button}
        link={ninthSecContent.link}
      />
      <TenthSec />
      <Footer />
    </div>
  );
}
