import React, { useState } from "react";
import axios from "axios";
import Afternavabr from "./Afternavabr";

const Adminquestion = () => {
  const params = new URLSearchParams(document.location.search);
  const className = params.get("class");
  const [question, setquestion] = useState({
    question: "",
    A: "",
    B: "",
    C: "",
    D: "",
    CorrectAnswer: "",
  });

  const [module, setModule] = useState({
    name: "",
    img: "",
    author: "",
  });

  const handleInput = (event) => {
    setquestion({ ...question, [event.target.name]: event.target.value });
  };

  const submitHandle = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `http://localhost:7000/api/setquestion/${className}`,
        question,
        config
      );
      // Handle response data if needed
      console.log("Response:", data);
      setquestion({
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        CorrectAnswer: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitModule = async (event) => {
    //alert("hello")
    event.preventDefault();
    try {
      const config = {
        "Content-type": "application/json",
      };
      const { data } = await axios.post(
        `http://localhost:7000/api/module/${className}`,
        module,
        config
      );
      // const response = await data.json();
      // console.log(response)
      alert("send success");
      setModule({
        name: "",
        img: "",
        author: "",
      });
    } catch (error) {
      console.log("Error from admin page send data " + error);
    }
  };

  const handleModule = (event) => {
    setModule({ ...module, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Afternavabr />
      <div className="container-form1">
        <p>
          Set up question for class :{" "}
          <span style={{ color: "red" }}>{className}</span>
        </p>
        <form action="" id="form" onSubmit={submitHandle}>
          <input
            type="text"
            onChange={handleInput}
            name="question"
            value={question.question}
            placeholder="Enter question"
          />
          <input
            type="text"
            onChange={handleInput}
            name="A"
            value={question.A}
            placeholder="OptionA"
          />
          <input
            type="text"
            onChange={handleInput}
            name="B"
            value={question.B}
            placeholder="OptionB"
          />
          <input
            type="text"
            onChange={handleInput}
            name="C"
            value={question.C}
            placeholder="OptionC"
          />
          <input
            type="text"
            onChange={handleInput}
            name="D"
            value={question.D}
            placeholder="OptionD"
          />
          <input
            type="text"
            onChange={handleInput}
            value={question.CorrectAnswer}
            name="CorrectAnswer"
            placeholder="CorrectAnswer"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="container-form2">
        <p>
          Set up MODULE for class :{" "}
          <span style={{ color: "red" }}>{className}</span>
        </p>
        <form action="" id="form" onSubmit={submitModule}>
          <input
            type="text"
            onChange={handleModule}
            name="name"
            value={module.name}
            placeholder="Enter the Subject Name"
          />
          <input
            type="text"
            onChange={handleModule}
            name="author"
            value={module.author}
            placeholder="Name of the Teacher or author"
          />
          <input
            type="text"
            onChange={handleModule}
            name="img"
            value={module.img}
            placeholder="Enter the video link"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Adminquestion;
