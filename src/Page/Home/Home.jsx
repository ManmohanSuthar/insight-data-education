import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Courses from "../../components/Courses/Courses";
import Students from "../../components/Students/Students";
import Questions from "../../components/Questions/Questions";
import Contact from "../../components/Contact/Contact";
import Photo from "../../components/Photo/Photo";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      offset: 120, // offset (in px) from the original trigger point
      duration: 800, // duration (in ms) of animations
      easing: "ease-in-out", // default easing for AOS animations
      delay: 0, // delay (in ms) for each animation
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up">
        <Categories />
      </div>
      <div data-aos="fade-up">
        <Courses />
      </div>
      <div data-aos="fade-up">
        <Questions />
      </div>
      <div data-aos="fade-up">
        <Students />
      </div>
      <div data-aos="fade-up">
        <Photo />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
    </>
  );
};

export default Home;
