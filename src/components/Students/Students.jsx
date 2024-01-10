import React, { useEffect, useState } from "react";
import "./Students.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Students = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 966) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [comments, setComments] = useState([]);
  const [photo, setPhoto] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch("https://dummyjson.com/comments");
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments);
      } else {
        console.error("Failed to fetch comments:", response.status);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <div className="main_students">
        <div className="students_heading">
          <h1>students testimonials</h1>
        </div>
        <div className="students_reviews">
          <Slider {...settings}>
            {comments.map((res) => {
              return (
                <>
                  <div className="reviews_card">
                    <div className="reviews_card_bio">
                      <p>{res.body}</p>
                    </div>
                    <div className="reviews_card_img">
                      <i id="user" class="fa-solid fa-user"></i>
                      <h1>{res.user.username}</h1>
                      <div className="student_rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Students;
