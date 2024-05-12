import React, { useState } from "react";
import axios from "axios";
import Insnav from "../navbar/Insnav";
import { toast, ToastContainer } from "react-toastify";


const Addques = () => {
  const queParams = new URLSearchParams(document.location.search);
  const examname = queParams.get("examname");
  const subname = queParams.get("subname");
  const id = queParams.get("id");

  const [post, setPost] = useState({
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
  });

  const submitForm = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/instructor/add-ques-ins?examname=${examname}&id=${id}&subname=${subname}`,
        post,
        config
      );
      toast.success("Question Added");
    } catch (error) {
      console.log("Error from the question page error" + error);
    }
  };

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  return (
    <>
      <ToastContainer />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
          fontSize: "2rem",
          marginTop: "5rem",
        }}
      >
        <Insnav />
        <div
          className="container-ins"
          style={{ marginTop: "5rem", maxWidth: "500px", width: "90%" }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#343a40",
            }}
          >
            Add Question Here
          </h1>
          <form onSubmit={submitForm}>
            <input
              type="text"
              name="question"
              placeholder="Enter question"
              onChange={handleInput}
              style={inputStyle}
            />
            <input
              type="text"
              name="optionA"
              placeholder="Option A"
              onChange={handleInput}
              style={inputStyle}
            />
            <input
              type="text"
              name="optionB"
              placeholder="Option B"
              onChange={handleInput}
              style={inputStyle}
            />
            <input
              type="text"
              name="optionC"
              placeholder="Option C"
              onChange={handleInput}
              style={inputStyle}
            />
            <input
              type="text"
              name="optionD"
              placeholder="Option D"
              onChange={handleInput}
              style={inputStyle}
            />
            <input
              type="text"
              name="correctAnswer"
              placeholder="Correct Answer"
              onChange={handleInput}
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const inputStyle = {
  padding: "0.5rem",
  marginBottom: "1rem",
  borderRadius: "5px",
  border: "1px solid #ced4da",
  width: "100%",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
  width: "100%",
};

export default Addques;
