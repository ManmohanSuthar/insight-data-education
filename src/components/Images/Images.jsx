import React from "react";
import "./Images.css";
import imgData from "./Images.json";

const Images = () => {
  return (
    <>
      <div className="main_images">
        <div className="images_heading">
          <h1>insight data education gallery</h1>
        </div>
        <div className="images_card">
          {imgData.map((res) => (
            <div className="images_card_img">
              <img src={res.img} alt={res.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Images;
