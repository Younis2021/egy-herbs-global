import React from "react";
import "./Forth-Sec.css";
import { ProductsData } from "../ProductsData/ProductsData";

export default function ForthSec() {
  const ForthSecContent = ProductsData.map((item) => item.ForthSec)[0];

  return (
    <div className="Forth-Sec">
      <div className="container">
        <div className="left-div">
          <span className="h2">{ForthSecContent.Left.h2}</span>
          <p>{ForthSecContent.Left.p1}</p>
          <p>{ForthSecContent.Left.p2}</p>
        </div>
        <div className="right-div">
          <div
            className="img-div"
            style={{
              background: `url(${ForthSecContent.Right.backgroundImage})`,
            }}></div>
        </div>
      </div>
    </div>
  );
}
