import React from "react";
import "./Footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiSolidEditLocation } from "react-icons/bi";
import { BiSolidPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="glass">
        <div className="container">
          <div className="upper-div">
            <div className="footer-card first">
              <span className="h1">Contact US</span>
              <div className="our-info">
                <div className="address">
                  <span className="icon">
                    <BiSolidEditLocation />
                  </span>
                  <span>Egypt - Fayoum – Ibshaway – Elbahr Elgedeed St</span>
                </div>
                <div className="phone">
                  <span className="icon">
                    <BiSolidPhone />
                  </span>
                  <Link className="footer-link">01013476272</Link>
                </div>
                <div className="email">
                  <span className="icon">
                    <AiOutlineMail />
                  </span>
                  <Link className="footer-link">
                    info@egyherbsglobal-eg.com@gmail.com
                  </Link>
                </div>
                <div className="social-media">
                  <Link className="icon-Link">
                    <BiLogoFacebook className="icon" />
                    {/* Add star rating component */}
                  </Link>
                  <Link className="icon-Link">
                    <BiLogoTwitter className="icon" />{" "}
                    {/* Add star rating component */}
                  </Link>
                  <Link className="icon-Link">
                    <BiLogoInstagram className="icon" />{" "}
                    {/* Add star rating component */}
                  </Link>
                  <Link className="icon-Link">
                    <BiLogoGoogle className="icon" />{" "}
                    {/* Add star rating component */}
                  </Link>
                  <Link className="icon-Link">
                    <BiLogoLinkedin className="icon" />{" "}
                    {/* Add star rating component */}
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-card second">
              <span className="h1">Featured Links</span>
              <div className="our-info">
                <Link className="footer-link">Our People</Link>
                <Link className="footer-link">Latest Media</Link>
                <Link className="footer-link">Our Branches</Link>
                <Link className="footer-link">Organisations</Link>
              </div>
            </div>

            <div className="footer-card third">
              <span className="h1">Newsletter</span>
              <div className="our-info">
                <div className="address">
                  <span>Get in your inbox the latest News and</span>
                </div>
                <div className="mail">
                  <input
                    type="email"
                    name=""
                    id="mail-box"
                    placeholder="Email"
                  />
                  <div className="mail-icon">
                    <AiOutlineMail />
                  </div>
                </div>
                <div className="email">
                  <span className="email">
                    Subscribe and get our weekly newsletter We'll never share
                    your email address
                  </span>
                </div>
              </div>
            </div>

            <div className="footer-card forth">
              <span className="h1">Quick Links</span>
              <div className="our-info">
                <Link className="footer-link">Home</Link>
                <Link className="footer-link">About</Link>
                <Link className="footer-link">Products</Link>
                <Link className="footer-link">Contact</Link>
                <Link className="footer-link">Certiication</Link>
              </div>
            </div>
          </div>

          <div className="lower-div">
            <div className="left-div">
              <p>© 2016 Egy Herbs All Rights Reserved .</p>
            </div>
            <div className="right-div">
              <p>Privacy policy</p>
              <p>Terms of service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
