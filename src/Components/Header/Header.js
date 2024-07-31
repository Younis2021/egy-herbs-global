import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import logo from "../../img/logo-1s.jpg";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="nav-1-div">
          <div className="nav-logo-container">
            <Link to="/" className="logo-link">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className="navbar">
            <ul>
              <li className="li">
                <NavLink to="/products" className="link">
                  PRODUCTS
                </NavLink>
              </li>
              <li className="li">
                <NavLink to="/about" className="link">
                  ABOUT
                </NavLink>
              </li>
              <li className="li">
                <NavLink to="/supplychain" className="link">
                  OUR SUPPPLY CHAIN PROCESS
                </NavLink>
              </li>
              <li className="li">
                <NavLink to="/contact" className="link">
                  MEET YOUR HERBS
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="profile-div">
          <Link className="icon-Link">
            <AiOutlineMail className="icon" />
          </Link>
          <Link className="icon-Link">
            <AiOutlineEnvironment className="icon" />
          </Link>
          <Link className="icon-Link">
            <AiOutlineUser className="icon" />
          </Link>
          <Link className="icon-Link">
            <AiOutlineShoppingCart className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
