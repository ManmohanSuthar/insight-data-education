import React from "react";
import "./MainButton.css";

const MainButton = ({ text, color }) => {
  return <button style={{ backgroundColor: `${color}` }}>{text}</button>;
};

export default MainButton;
