import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="main_about">
        <div className="about_left">
          <div className="about_img">
            <img src="/src/assets/2.jpg" alt="" />
          </div>
        </div>
        <div className="about_right">
          <h1>about us</h1>
          <p>
            Insight Data Education is a registered organisation under Ministry
            of Micro Small and Medium Enterprises Ministry of Govt. of India.
            Our aim is to provide Skilling Education (Job Oriented Programme) to
            Students in the form of computerized courses in Competitive Market,
            which help students find jobs in market. Today skill education is
            more important than diploma/certificate, diploma/certificate is just
            a paper which one and only show your name in paper does not show
            your skill level basic to advance. Our focus is one and only skill
            level basic to advance i.e. 1 to 10 skill levels. Our content is
            industry related to every topic covered in this content one and only
            give you comprehensive knowledge about courses which relate with
            you, I assure you that you never be disappointed from our center
            about courses. We have provided several computerized & accounting
            courses:
          </p>
          <div>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-google"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
