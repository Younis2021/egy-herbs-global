import React from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
// import logo from "../../img/global/logo-1s.jpg";
// import logo from "../../img/global/Gaia-Herbs-Logo_250x_2x_70d5128f-504f-4b28-8924-73b4999c9fd7_250x.png";
// import logo from "../../img/global/new-gaia-logo-white_256x256_4ad8adb3-40c5-4a58-b39b-ec2a14d2f87b_250x.png";
import logo from "../../img/global/sami final-06.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="nav-left-div">
          <ul>
            <li>
              <Link className="icon-Link">
                <AiOutlineMail className="icon" />
              </Link>
            </li>
            <li>
              <Link className="icon-Link">
                <AiOutlineEnvironment className="icon" />
              </Link>
            </li>
            <li className="li">
              <NavLink to="/products" className="link">
                PRODUCTS
              </NavLink>
            </li>
            <li className="li">
              <NavLink to="/supplychain" className="link">
                PROCESS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-center-div">
          <Link to="/" className="logo-link">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-right-div">
          <ul>
            <li className="li">
              <NavLink to="/about" className="link">
                ABOUT
              </NavLink>
            </li>
            <li className="li">
              <NavLink to="/contact" className="link">
                MEET YOUR HERBS
              </NavLink>
            </li>
            <li>
              <Link className="icon-Link">
                <AiOutlineUser className="icon" />
              </Link>
            </li>
            <li>
              <Link className="icon-Link">
                <AiOutlineShoppingCart className="icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
