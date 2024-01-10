import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Footer from "./components/Footer/Footer";
import Images from "./components/Images/Images";
import Courses from "./components/Courses/Courses";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import CoursesCard from "./components/Courses/CoursesCard";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      offset: 120, // offset (in px) from the original trigger point
      duration: 800, // duration (in ms) of animations
      easing: "ease-in-out", // default easing for AOS animations
      delay: 0, // delay (in ms) for each animation
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="main_App">
        <BrowserRouter>
          <div data-aos="fade-down">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/images" element={<Images />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CoursesCard />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div data-aos="fade-up">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
