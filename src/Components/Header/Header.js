import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="nav-1-div">
          <Link to="/" className="logo-link"></Link>
          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/products" className="link">
                  PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="link">
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="link">
                  MEET YOUR HERBS<span>®</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="profile-div">
          <AiOutlineMail className="icon" />
          <AiOutlineEnvironment className="icon" />
          <AiOutlineUser className="icon" />
          <AiOutlineShoppingCart className="icon" />
        </div>
      </div>
    </div>
  );
}
