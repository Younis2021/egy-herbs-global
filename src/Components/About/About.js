import React from "react";
import NinthSec from "../Home-Page/9-Ninth-Sec/Ninth-Sec";
import { AboutData } from "./AboutData/AboutData";
import "./About.css";
import SecondSec from "./Second-Sec/Second-Sec";
import ThirdSec from "./Third-Sec/Third-Sec";
import ForthSec from "./Forth-Sec/Forth-Sec";
import TenthSec from "../Home-Page/10-Tenth-Sec/Tenth-Sec";
import Footer from "../Home-Page/11-Footer/Footer";
export default function About() {
  const aboutContent = AboutData.map((item) => item.Hero)[0];

  return (
    <div className="About">
      <NinthSec
        backgroundImage={aboutContent.backGroundImage}
        spans={aboutContent.spans}
        p={aboutContent.p}
      />
      <SecondSec />
      <ForthSec />
      <ThirdSec />
      <TenthSec />
      <Footer />
    </div>
  );
}
