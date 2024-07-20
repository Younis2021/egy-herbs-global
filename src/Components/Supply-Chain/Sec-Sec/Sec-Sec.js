import React from "react";
import "./Sec-Sec.css";
import { BiPlus } from "react-icons/bi";

export default function SecSec() {
  return (
    <div className="Sec-Sec">
      <div className="container">
        <div>
          <p>Online Ordering Support</p>
          <BiPlus />
        </div>
        <div>
          <p>Shipping & Payment Information</p>
          <BiPlus />
        </div>
        <div>
          <p>Our Satisfaction Guarantee & Refund Policy</p>
          <BiPlus />
        </div>
      </div>
    </div>
  );
}
