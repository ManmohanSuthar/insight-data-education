import React from "react";
import { useParams } from "react-router-dom";
import CoursesData from "./CoursesData.json";
import "./CoursesCard.css";

const CoursesCard = () => {
  const params = useParams();
  const courseId = parseInt(params.id);
  const selectedCourse = CoursesData.find((course) => course.id === courseId);

  if (!selectedCourse) {
    return <div>No course found for the given ID</div>;
  }

  return (
    <div className="main_CoursesCard">
      <div className="CoursesCard_Card">
        <div className="CoursesCard_left" key={selectedCourse.id}>
          <div className="CoursesCard_left_img">
            <img src={selectedCourse.img} />
          </div>
        </div>
        <div className="CoursesCard_right" key={selectedCourse.id}>
          <div className="CoursesCard_right_bio">
            <h1>{selectedCourse.name}</h1>
            <div className="CoursesCard_div">
              <i class="fa-solid fa-certificate"></i>
              <h1>
                <span>Certificate</span>
                Government Approved
              </h1>
            </div>
            <div className="CoursesCard_div">
              <i class="fa-solid fa-language"></i>
              <h1>
                <span>language</span>
                Hindi , English
              </h1>
            </div>
            <div className="CoursesCard_div">
              <i class="fa-solid fa-chalkboard-user"></i>
              <h1>
                <span>instructor</span>
                Sanjay Rajpot
              </h1>
            </div>
            <div className="CoursesCard_div">
              <i class="fa-solid fa-clock"></i>
              <h1>
                <span>time</span>3 Month
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="CoursesCard_bio">
        <h1>OUR COURSES</h1>
        <p>{selectedCourse.fullbio}</p>
      </div>
    </div>
  );
};

export default CoursesCard;
