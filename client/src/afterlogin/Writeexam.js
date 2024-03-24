import React, { useEffect, useState } from "react";

const Writeexam = () => {
  const params = new URLSearchParams(document.location.search);
  const quesData = JSON.parse(params.get("queslist"));
  const [ques, setQues] = useState([]);
  const [currentIndex,setCurrentIndex] = useState(0)
  const [selectedAnswer,setSelectedAnswer] = useState(null)
 const prevHandle = () => {
  setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  setSelectedAnswer(null);
};

 const nextHandle = () => {
  setCurrentIndex((index) =>
     index <ques.length - 1 ? index + 1 : index
  );
  setSelectedAnswer(null); 
 };
 const handleAnswerClick = (answer) => {
  setSelectedAnswer(answer);
 };
  useEffect(() => {
    setQues(quesData);
  });
  return (
    <div>
         <div className="giveexam-container">
     <h1 className="giveexam-title">Welcome to the exam !</h1>
       {ques &&
         ques.map((question, index) => (
           <div
             key={index}
             className={`question-container ${
               index === currentIndex ? "active" : ""
             }`}
           >
             <h2>{question.question}</h2>
             <ul id="ques">
               <li onClick={() => handleAnswerClick("A")} id="liq">
                 A. {question.A}
               </li>
               <li onClick={() => handleAnswerClick("B")} id="liq">
                 B. {question.B}
               </li>
               <li onClick={() => handleAnswerClick("C")} id="liq">
                 C. {question.C}
               </li>
               <li onClick={() => handleAnswerClick("D")} id="liq">
                 D. {question.D}
               </li>
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
                 disabled={currentIndex === ques.length - 1}
               >
                 Next
               </button>
             </div>
             {selectedAnswer && (
               <div>
                 <p>You selected: {selectedAnswer}</p>
               </div>
             )}
           </div>
         ))}
</div> 
      {/* <h1>All Question are :</h1>
      {ques.map((val, ind) => {
        return (
          <div key={ind}>
            <h1>{val.question}</h1>
            <p>{val.optionA}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Writeexam;
