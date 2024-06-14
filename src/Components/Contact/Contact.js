import React from "react";
import "./Contact.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiSolidEditLocation } from "react-icons/bi";
import { BiSolidPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HomePageData } from "../Home-Page/Home-Page-Data/Home-Page-Data";

export default function Contact() {
    const footerContent = HomePageData.map((item) => item.Footer)[0];

    return (
        <div className="footer" style={{ height: "100vh" }}>
            <div className="glass">
                <div className="container">
                    <div className="upper-div">
                        {footerContent.UpperDiv.map((card) => {
                            if (card.id === 1) {
                                return (
                                    <div key={card.id} className="footer-card first">
                                        <span className="h1">{card.h1}</span>
                                        <div className="our-info">
                                            <div className="address">
                                                <span className="icon">
                                                    <BiSolidEditLocation />
                                                </span>
                                                <span>{card.span}</span>
                                            </div>
                                            <div className="phone">
                                                <span className="icon">
                                                    <BiSolidPhone />
                                                </span>
                                                <Link
                                                    to="https://web.whatsapp.com/"
                                                    className="footer-link">
                                                    {card.phone}
                                                </Link>
                                            </div>
                                            <div className="email">
                                                <span className="icon">
                                                    <AiOutlineMail />
                                                </span>
                                                <Link
                                                    to="https://web.whatsapp.com/"
                                                    className="footer-link">
                                                    {card.mail}
                                                </Link>
                                            </div>
                                            <div className="social-media">
                                                <Link className="icon-Link">
                                                    <BiLogoFacebook className="icon" />
                                                </Link>
                                                <Link className="icon-Link">
                                                    <BiLogoTwitter className="icon" />
                                                </Link>
                                                <Link className="icon-Link">
                                                    <BiLogoInstagram className="icon" />
                                                </Link>
                                                <Link className="icon-Link">
                                                    <BiLogoGoogle className="icon" />
                                                </Link>
                                                <Link className="icon-Link">
                                                    <BiLogoLinkedin className="icon" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else if (card.id === 2) {
                                return (
                                    <div key={card.id} className="footer-card second">
                                        <span className="h1">{card.h1}</span>
                                        <div className="our-info">
                                            {Object.values(card.Links).map((link, index) => (
                                                <Link key={index} className="footer-link">
                                                    {link}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            } else if (card.id === 3) {
                                return (
                                    <div key={card.id} className="footer-card third">
                                        <span className="h1">{card.h1}</span>
                                        <div className="our-info">
                                            <div className="address">
                                                <span>{card.span}</span>
                                            </div>
                                            <div className="mail">
                                                <input type="email" id="mail-box" placeholder="Email" />
                                                <div className="mail-icon">
                                                    <AiOutlineMail />
                                                </div>
                                            </div>
                                            <div className="email">
                                                <span>{card.span2}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else if (card.id === 4) {
                                return (
                                    <div key={card.id} className="footer-card forth">
                                        <span className="h1">{card.h1}</span>
                                        <div className="our-info">
                                            {Object.values(card.Links).map((link, index) => (
                                                <Link key={index} className="footer-link">
                                                    {link}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>

                    <div className="lower-div">
                        <div className="left-div">
                            <p>{footerContent.LowerDiv.p1}</p>
                        </div>
                        <div className="right-div">
                            <p>{footerContent.LowerDiv.p2}</p>
                            <p>{footerContent.LowerDiv.p3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
