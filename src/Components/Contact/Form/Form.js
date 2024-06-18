import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi"; // Import the specific icon you need

export default function Form() {
  return (
    <div className="form-container">
      <div className="container-div">
        <h1 className="tittle">Send A Message</h1>
        <form className="custom-form">
          <div className="top-one">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Please Select How We Can Help You"
              required
            />
          </div>
          <div className="one">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="First Name (required)"
              required
            />
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Last Name (optional)"
              required
            />
          </div>
          <div className="bottom-two">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email Address (required)"
              required
            />
          </div>

          <div className="three">
            <textarea
              className="form-text-area"
              id="message"
              placeholder="How Can We Help You ?"
              required
            ></textarea>
          </div>
          <div className="forth">
            <Link type="submit" className="btn">
              Submit
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
