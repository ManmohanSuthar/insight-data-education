import React from "react";
import "./Hero.css";
import MainButton from "../Button/MainButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="main_hero">
        <div className="hero_left">
          <div className="hero_title">
            <h1>Unlock Your Potential: Explore Limitless Learning with Us!</h1>
            <p>
              Empowering Education with Data Insights: Our Computer Center
              Shapes Your Future. We Teach Data and Provide Training in
              Innovations
            </p>
            <Link
              to={"/contact"}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <MainButton text={"Get Started"} />
            </Link>
          </div>
        </div>
        <div className="hero_right">
          <div className="hero_img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/insight-data-education.appspot.com/o/hero_img.png?alt=media&token=c1bb0a69-4f33-41b0-9311-5c96b33324fb"
              alt="Hero img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
