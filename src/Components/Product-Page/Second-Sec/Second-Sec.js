import React from "react";
import "./Second-Sec.css";
import ProductCard from "../Product-Card/Product-Card";
import { Link } from "react-router-dom";
// import { ProductsData } from "../ProductsData/ProductsData";

export default function SecondSec() {
  // const secondSecContent = ProductsData.map((item) => item.SecondSec)[0];
  return (
    <div className="Second-Sec">
      <div className="container">
        <nav className="left-nav">
          <div className="price-range">
            <span className="category">Price Range</span>
            <div>
              <input type="checkbox" name="10-25" id="" />
              <span>10 - 25</span>
            </div>
            <div>
              <input type="checkbox" name="25-50" id="" />
              <span>10 - 25</span>
            </div>
            <div>
              <input type="checkbox" name="50-75" id="" />
              <span>10 - 25</span>
            </div>
          </div>
          <div className="type">
            <span className="category">Type</span>
            <Link className="link">Liquid Phyto-Caps®</Link>
            <Link className="link">Liquid Phyto-Caps®</Link>
            <Link className="link">Liquid Phyto-Caps®</Link>
            <Link className="link">Liquid Phyto-Caps®</Link>
            <Link className="link">Liquid Phyto-Caps®</Link>
          </div>
        </nav>
        <div className="right-div">
          <div className="display-div">
            <p className="produts-numbers">38 results found</p>
            <div className="display-icons">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="products-container">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
