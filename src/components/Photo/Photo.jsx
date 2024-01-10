import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Photo.css";
import imgData from "../Images/Images.json";

const Photo = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 966) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
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
  return (
    <>
      <div className="photo_images">
        <div className="photo_heading">
          <h1>insight data education gallery</h1>
        </div>
        <div className="photo_card">
          <Slider {...settings}>
            {imgData.map((res) => (
              <div className="images_card_img">
                <img src={res.img} alt={res.id} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Photo;
