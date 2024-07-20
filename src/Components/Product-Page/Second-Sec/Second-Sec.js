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
            <Link className="link">Herbs®</Link>
            <Link className="link">Spices®</Link>
            <Link className="link">Seeds®</Link>
            <Link className="link">Fruits®</Link>
          </div>
        </nav>
        <div className="right-div">
          <div className="products-container">
            <div className="over-div">
              <p className="over-left-p">
                1-10 out of <span>198 results found in 0.001s</span>
              </p>
              <div className="over-right-div">
                <p>Sorted by Relevance</p>
                <div className="sort-icon-div">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="bellow-produvts-div">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
