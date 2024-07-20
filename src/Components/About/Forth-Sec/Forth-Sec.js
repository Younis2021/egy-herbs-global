import React from "react";
import "./Forth-Sec.css";
import { AboutData } from "../AboutData/AboutData";
import ThirdSec from "./Third-Sec/Third-Sec";

export default function ForthSec() {
  const ForthSecContent = AboutData.map((item) => item.ThirdSec)[0];
  

  return (
    <div className="Forth-Sec">
      {ForthSecContent.map((element, i) => (
        <ThirdSec
          key={i} // Added key for each element
          backGroundImg={element.backGroundImg}
          p1={element.P} // Corrected prop name
          p2={element.P2}
          h1={element.h1}
          direction={element.direction}
          btn={element.btn}
        />
      ))}
    </div>
  );
}
