import React, { useState, useEffect } from "react";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Dynamicexamwrite = () => {
  const navigate = useNavigate();
  // const queParams = new URLSearchParams(document.location.search);
  // const quesList = JSON.parse(queParams.get("ques"));
  const queParams = new URLSearchParams(document.location.search);
  const subname = queParams.get("class");
  const examname = queParams.get("exam");
  const [quesList, setExamlist] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      console.log(subname);
      console.log(examname);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const response = await axios.get(
          `http://localhost:7000/api/user/get-ques-list-examname?subname=${subname}&exam=${examname}`
        );
        setExamlist(response.data.data);
      } catch (error) {
        console.log("Error from the getting examList" + error);
      }
    };
    fetchData();
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quesList[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption("");
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedOption("");
  };

  const handleFinishExam = () => {
    // Check the answer of the last question
    if (selectedOption === quesList[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    // Calculate and display the result
    const totalQuestions = quesList.length;
    const percentageScore = (score / totalQuestions) * 100;
    alert(`Your score: ${score}/${totalQuestions} (${percentageScore}%)`);
    navigate("/afterlogin");
  };

  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          display: "flex",
          justifyContent: "cernter",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Afterloginusernav />
        <h1
          style={{
            fontSize: "2rem",
            color: "blue",
            marginTop: "10rem",
            display: "flex",
            justifyContent: "cernter",
            alignItems: "center",
            borderRadius: "100px",
          }}
        >
          Welcome to the exam
        </h1>
        {quesList.map(
          (question, index) =>
            index === currentQuestion && (
              <div
                key={index}
                style={{
                  marginTop: "2rem",
                  backgroundColor: "#c7c9c9",
                  width: "50%",
                  borderRadius: "10px",
                }}
              >
                <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  Q. {question.question}
                </p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li style={{ marginBottom: "2rem" }}>
                    <input
                      type="radio"
                      id={`optionA_${index}`}
                      name={`option_${index}`}
                      value={question.optionA}
                      checked={selectedOption === question.optionA}
                      onChange={() => handleOptionSelect(question.optionA)}
                    />
                    <label
                      htmlFor={`optionA_${index}`}
                      style={{
                        marginLeft: "2rem",
                        fontSize: "2rem",
                        color: "green",
                      }}
                    >
                      {question.optionA}
                    </label>
                  </li>
                  <li style={{ marginBottom: "2rem" }}>
                    <input
                      type="radio"
                      id={`optionB_${index}`}
                      name={`option_${index}`}
                      value={question.optionB}
                      checked={selectedOption === question.optionB}
                      onChange={() => handleOptionSelect(question.optionB)}
                    />
                    <label
                      htmlFor={`optionB_${index}`}
                      style={{
                        marginLeft: "2rem",
                        fontSize: "2rem",
                        color: "blue",
                      }}
                    >
                      {question.optionB}
                    </label>
                  </li>
                  <li style={{ marginBottom: "2rem" }}>
                    <input
                      type="radio"
                      id={`optionC_${index}`}
                      name={`option_${index}`}
                      value={question.optionC}
                      checked={selectedOption === question.optionC}
                      onChange={() => handleOptionSelect(question.optionC)}
                    />
                    <label
                      htmlFor={`optionC_${index}`}
                      style={{
                        marginLeft: "2rem",
                        fontSize: "2rem",
                        color: "red",
                      }}
                    >
                      {question.optionC}
                    </label>
                  </li>
                  <li style={{ marginBottom: "2rem" }}>
                    <input
                      type="radio"
                      id={`optionD_${index}`}
                      name={`option_${index}`}
                      value={question.optionD}
                      checked={selectedOption === question.optionD}
                      onChange={() => handleOptionSelect(question.optionD)}
                    />
                    <label
                      htmlFor={`optionD_${index}`}
                      style={{
                        marginLeft: "2rem",
                        fontSize: "2rem",
                        color: "purple",
                      }}
                    >
                      {question.optionD}
                    </label>
                  </li>
                </ul>
              </div>
            )
        )}

        <div>
          {currentQuestion > 0 && (
            <button
              style={{
                fontSize: "1rem",
                padding: "2rem 1rem",
                marginRight: "1rem",
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "0.3rem",
              }}
              onClick={handlePreviousQuestion}
            >
              Previous
            </button>
          )}
          {currentQuestion < quesList.length - 1 ? (
            <button
              style={{
                fontSize: "1rem",
                padding: "2rem 1rem",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "0.3rem",
              }}
              onClick={handleNextQuestion}
            >
              Next
            </button>
          ) : (
            <button
              style={{
                fontSize: "1rem",
                padding: "2rem 1rem",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "0.3rem",
              }}
              onClick={handleFinishExam}
            >
              Finish
            </button>
          )}
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Dynamicexamwrite;
