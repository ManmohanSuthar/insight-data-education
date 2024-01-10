import React from "react";
import "./Questions.css";
import QuestionsData from "./Question.json";

const Questions = () => {
  return (
    <div className="main_questions">
      <div className="questions_heading">
        <h1>Our Popular Courses</h1>
      </div>
      <div className="questions_cards">
        {QuestionsData.map((res) => (
          <div className="questions_card">
            <div className="questions_card_heding">
              <i class="fa-solid fa-question"></i>
              <h1>{res.q}</h1>
            </div>
            <p>{res.ans}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
