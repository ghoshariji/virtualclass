// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Afternavabr from "./Afternavabr";

// const Giveexam = () => {
//   // const location = useLocation();
//   // const parsedData = location.state && location.state.ques;
//   const params = new URLSearchParams(document.location.search);
//   const quesData = params.get("queslist")
//   const [data,setData] = useState([])

//   // const [currentIndex, setCurrentIndex] = useState(0);
//   // const [selectedAnswer, setSelectedAnswer] = useState(null);

//   // const prevHandle = () => {
//   //   setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
//   //   setSelectedAnswer(null);
//   // };

//   // const nextHandle = () => {
//   //   setCurrentIndex((index) =>
//   //     index < parsedData.length - 1 ? index + 1 : index
//   //   );
//   //   setSelectedAnswer(null); 
//   // };

//   // const handleAnswerClick = (answer) => {
//   //   setSelectedAnswer(answer);
//   // };
//   useEffect(() => {
//     if (quesData && quesData.questionSet && Array.isArray(quesData.questionSet)) {
//       setData(quesData.questionSet);
//     }
//   }, [quesData]);
//   return (
//     <div>
//       <Afternavabr />
//       {data.map((exam, examIndex) => (
//       <div key={examIndex}>
//         <p>{exam.examname}</p>
//         <p>{exam.time}</p>
//         {exam.questionSet.map((question, questionIndex) => (
//           <div key={questionIndex}>
//             <h2>{question.question}</h2>

//           </div>
//         ))}
//       </div>
//     ))}
      // {/* <div className="giveexam-container">
      //   <h1 className="giveexam-title">Welcome to the exam !</h1>
      //   {parsedData &&
      //     parsedData.map((question, index) => (
      //       <div
      //         key={index}
      //         className={`question-container ${
      //           index === currentIndex ? "active" : ""
      //         }`}
      //       >
      //         <h2>{question.question}</h2>
      //         <ul id="ques">
      //           <li onClick={() => handleAnswerClick("A")} id="liq">
      //             A. {question.A}
      //           </li>
      //           <li onClick={() => handleAnswerClick("B")} id="liq">
      //             B. {question.B}
      //           </li>
      //           <li onClick={() => handleAnswerClick("C")} id="liq">
      //             C. {question.C}
      //           </li>
      //           <li onClick={() => handleAnswerClick("D")} id="liq">
      //             D. {question.D}
      //           </li>
      //         </ul>
      //         <div className="button-container">
      //           <button
      //             className="prev-button"
      //             onClick={prevHandle}
      //             disabled={currentIndex === 0}
      //           >
      //             Prev
      //           </button>
      //           <button
      //             className="next-button"
      //             onClick={nextHandle}
      //             disabled={currentIndex === parsedData.length - 1}
      //           >
      //             Next
      //           </button>
      //         </div>
      //         {selectedAnswer && (
      //           <div>
      //             <p>You selected: {selectedAnswer}</p>
      //           </div>
      //         )}
      //       </div>
      //     ))}
      // </div> */}
//     </div>
//   );
// };

// export default Giveexam;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Afternavabr from "./Afternavabr";
import Finalnavbar from "../navbar/Finalnavbar";

const Giveexam = () => {
  const params = new URLSearchParams(document.location.search);
  const quesData = JSON.parse(params.get("queslist"));
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    if (quesData && Array.isArray(quesData)) {
      setData(quesData);
    }
  }, [quesData]);

  return (
    <div>
      <Finalnavbar />
      {data.map((exam, examIndex) => (
        <div key={examIndex}>
          <p> Exam Name : {exam.examname}</p>
          <p> Time: {exam.time}</p>
         <button onClick={()=> navigate(`/writeexam?queslist=${JSON.stringify(exam.questionSet)}`)}> Start Exam </button>
        </div>
      ))}
    </div>
  );
};

export default Giveexam;

