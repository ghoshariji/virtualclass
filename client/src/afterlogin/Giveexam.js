import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Giveexam = () => {
  const location = useLocation();
  const parsedData = location.state && location.state.ques;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevHandle = () => {
    setCurrentIndex((previndex) =>
      previndex > 0 ? previndex - 1 : previndex
    );
  };

  const nextHandle = () => {
    setCurrentIndex((index) =>
      index < parsedData.length - 1 ? index + 1 : index
    );
  };

  return (
    <div className="giveexam-container">
      <h1 className="giveexam-title">Hello</h1>
      {parsedData &&
        parsedData.map((question, index) => (
          <div
            key={index}
            className={`question-container ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <h2>{question.name}</h2>
            <ul>
              <li>A. {question.A}</li>
              <li>B. {question.B}</li>
              <li>C. {question.C}</li>
              <li>D. {question.D}</li>
            </ul>
            <div className="button-container">
              <button
                className="prev-button"
                onClick={prevHandle}
                disabled={currentIndex === 0}
              >
                Prev
              </button>
              <button
                className="next-button"
                onClick={nextHandle}
                disabled={currentIndex === parsedData.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Giveexam;



//   const query = new URLSearchParams(location.search);
//   const ques = query.get('ques');
// passing data through uselocation ,location and state variable passing full object
//<------------------------------------------------>
  // Parse the JSON string into an object
//   const parsedData = JSON.parse(ques);
// const parsedData = ques ? JSON.parse(ques) : null;