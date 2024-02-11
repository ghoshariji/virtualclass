import React from "react";
import { useLocation } from "react-router-dom";

const Giveexam = () => {
  const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const ques = query.get('ques');
const parsedData= location.state && location.state.ques;

  // Parse the JSON string into an object
//   const parsedData = JSON.parse(ques);
// const parsedData = ques ? JSON.parse(ques) : null;

  return (
    <div>
      <h1>Hello</h1>
      {parsedData && parsedData.first && (
        <div>
          <h2>{parsedData.first.name}</h2>
          <ul>
            <li>A. {parsedData.first.A}</li>
            <li>B. {parsedData.first.B}</li>
            <li>C. {parsedData.first.C}</li>
            <li>D. {parsedData.first.D}</li>
          </ul>
          <p>Correct Option: {parsedData.first.correctoption}</p>
        </div>
      )}
    </div>
  );
};

export default Giveexam;
