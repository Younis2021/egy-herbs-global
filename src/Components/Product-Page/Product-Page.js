import React from "react";
import NinthSec from "../Home-Page/9-Ninth-Sec/Ninth-Sec";
import { ProductsData } from "./ProductsData/ProductsData";
import "./Product-Page.css";
import SecondSec from "./Second-Sec/Second-Sec";
import ThirdSec from "./Third-Sec/Third-Sec";

export default function ProductPage() {
  const productsContent = ProductsData.map((item) => item.Hero)[0];

  return (
    <div className="Products">
      <NinthSec
        backgroundImage={productsContent.backgroundImage}
        spans={productsContent.spans}
        p={productsContent.p}
      />
      <SecondSec />
      <ThirdSec />
      <SecondSec />
    </div>
  );
}
