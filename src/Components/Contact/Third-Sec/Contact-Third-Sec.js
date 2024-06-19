import React from "react";
import "./Contact-Third-Sec.css";

export default function ContactThirdSec() {
  return (
    <div className="third-Sec">
      <div className="container">
        <div className="left">
          <div className="text-container">
            <div className="left-div-upper-text">
              <p>CUSTOMER & RETAILER SUPPORT</p>
              <p>
                Our Customer Support Team is here for you Monday through Friday,
                9 AM - 7 PM EST. We observe all federal holidays and will be
                happy to assist you on the next business day. Please Note: Gaia
                Herbs does not have a physical retail store to receive or drop
                off orders.
              </p>
            </div>
            <div className="left-div-lower-text">
              <div>
                <p>Corporate Office</p>
                <span>1.800.831.7780</span>
              </div>
              <div>
                <p>New & Existing Orders</p>
                <span>Option 2</span>
              </div>
              <div>
                <p>Product or Ingredient Inquiries</p>
                <span>Option 3</span>
              </div>
              <div>
                <p>Retail Partner Support</p>
                <span>Option 1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="text-container">
            <div className="left-div-lower-text">
              <p className="title">ADDITIONAL CONTACT INFORMATION</p>
              <div className="right-lower-container">
                <div>
                  <p>Corporate Office</p>
                  <span>1.800.831.7780</span>
                </div>
                <div>
                  <p>Fax</p>
                  <span>1.800.717.1722</span>
                </div>
                <div>
                  <p>Email</p>
                  <span>info@gaiaherbs.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
