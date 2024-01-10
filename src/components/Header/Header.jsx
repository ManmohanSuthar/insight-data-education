import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="main_header">
        <div className="header_left">
          <div className="header_logo">
            <Link to={"/"}>insight data education</Link>
          </div>
        </div>
        <div className="header_right">
          <div className="header_links">
            <Link to="/">Home</Link>
            <Link to="/images">Images</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          {/* <button className="sidebar_toggle" onClick={toggleSidebar}>
            Toggle Sidebar
          </button> */}
        </div>
      </div>
      {/* {isSidebarOpen && (
        <div className="sidebar" onClick={closeSidebar}>
          <Link to="/">Home</Link>
          <Link to="/images">Images</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )} */}
    </>
  );
};

export default Header;
