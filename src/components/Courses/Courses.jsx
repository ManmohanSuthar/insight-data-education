import React from "react";
import "./Courses.css";
import CoursesData from "./CoursesData.json";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="main_Courses">
        <div className="Courses_heading">
          <h1>Our Popular Courses</h1>
        </div>
        <div className="Courses_Card">
          {CoursesData.map((res) => {
            return (
              <>
                <div className="Courses_Cards">
                  <div className="courses_cards_img">
                    <img src={res.img} alt="" />
                  </div>
                  <h1>{res.name}</h1>
                  <p>{res.bio}</p>
                  <Link className="Courses_Card_btn" to={`/courses/${res.id}`}>
                    Learn More
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
