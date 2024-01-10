import React from "react";
import "./Categories.css";
import MainButton from "../Button/MainButton";
import CategoriesData from "./Categories.json";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="main_categories">
        <div className="Categories_left">
          <h1>Categories</h1>
          <h2>
            Explore Data: Courses, Training, Services, <br /> Resources, About
            Us, Events, <br /> Contact for Innovations <br />
            in Education.
          </h2>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/courses"
          >
            <MainButton text={"Learn More"} color={"#5156ad"} />
          </Link>
        </div>
        <div className="Categories_right">
          {CategoriesData.map((res) => {
            return (
              <div className="Categories_card">
                <img
                  style={{ backgroundColor: `${res.color}` }}
                  src={res.img}
                  alt=""
                />
                <h1>{res.name}</h1>
                <p>{res.bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
