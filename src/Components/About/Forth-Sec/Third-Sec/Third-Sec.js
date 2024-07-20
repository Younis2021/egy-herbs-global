import React from "react";
import "./Third-Sec.css";
import { Link } from "react-router-dom";

export default function ThirdSec({
  backGroundImg,
  p1,
  h1,
  p2,
  direction,
  btn,
}) {
  return (
    <div className="third-sec">
      <div className="container" style={{ direction: direction }}>
        <div
          className="left-div"
          style={{ background: `url(${backGroundImg})` }}
        ></div>
        <div className="right-div-container">
          <div className="right-div" style={{ direction: "initial" }}>
            <h1 className="tittle">{h1}</h1>
            <p className="paragraph">{p1}</p>
            {p2 && <p className="paragraph">{p2}</p>}
            {btn && (
              <Link to="/" className="about-btn">
                {btn}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
