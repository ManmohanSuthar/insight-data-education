import React, { useEffect } from "react";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="main_footer">
        <div className="footer_logo">
          {" "}
          <h1>insight data education</h1>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.2531320548665!2d74.65912227420557!3d29.45061784646404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916bdcffb83c3a1%3A0x4f11a3e03bc2b2df!2sInsight%20Data%20Education!5e0!3m2!1sen!2sin!4v1704346187705!5m2!1sen!2sin"
            width="200"
            height="200"
            style={{ border: "0" }} // Use a JavaScript object for style
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="footer_links">
          <h1>Permalinks</h1>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/images"
          >
            images{" "}
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/courses"
          >
            courses
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/about-us"
          >
            about us
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/contact"
          >
            contact
          </Link>
        </div>
        <div className="footer_courses">
          <h1>courses</h1>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/courses/1"
          >
            Tally With GST Course
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/courses/2"
          >
            Tally With TDS Course{" "}
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/courses/3"
          >
            Tally Professional Course
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/courses/4"
          >
            Financial Accounting & Taxation Course
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/courses/5"
          >
            Computer Data Entry Operator Course
          </Link>
        </div>
        <div className="footer_contacts">
          <h1>Contact Us</h1>
          <h2>98968-31507</h2>
          <h2>sanjaysinghraj526@gmail.com</h2>
          <div>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-google"></i>
          </div>
        </div>
      </div>
      <div className="admin">
        <h1>all copyrights reserved @manmohansuthar</h1>
        <div>
          <a target="_blank" href="https://www.instagram.com/manmohan.suthar">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a target="_blank" href="https://github.com/ManmohanSuthar">
            <i class="fa-brands fa-github"></i>
          </a>

          <a target="_blank" href="https://manmohansuthar.netlify.app/">
            <i class="fa-solid fa-copyright"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
