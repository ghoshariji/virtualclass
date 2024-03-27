import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Afternavabr from "../afterlogin/Afternavabr";
import Finalnavbar from "../navbar/Finalnavbar";
import img from "../image/first.jpg"

const Addexamins = () => {
  const quesParam = new URLSearchParams(document.location.search);
  const examName = quesParam.get("name");
  const navigate = useNavigate();
  const [exam, setExam] = useState([]);
  const id = quesParam.get("id");
  const [post, setPost] = useState({
    examname: "",
    time: "",
    questionSet: [],
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const formSubmit = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `http://localhost:7000/api/instructor/addexam-ins?examName=${examName}&id=${id}`,
        post,
        config
      );
      alert("Added exam");
    } catch (error) {
      console.log("error from the instructor save exam" + error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const response = await axios.get(
          `http://localhost:7000/api/instructor/get-exam-instructor?id=${id}&examName=${examName}`,
          config
        );
        setExam(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error from the getting exam details" + error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Finalnavbar />
      <div style={{ marginTop: "10rem" }}>
        <div
          className="container-home-ins"
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {exam.map((val, ind) => {
            return (
              <div class="card-container" key={ind}>
                <div
                  class="card"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div class="imgBx">
                    <img className="img9832" src={img} alt="" />
                  </div>
                  <div class="content">
                    <h2 className="head9832">
                      {" "}
                      <i> Exam Name : {val.examname}</i>
                    </h2>
                    <p
                      className="p1"
                      style={{ fontSize: "11px", color: "red" }}
                    >
                      Time : {val.time}
                    </p>
                    <button
                      onClick={() =>
                        navigate(
                          `/addquesins?examname=${val.examname}&id=${id}&subname=${examName}`
                        )
                      }
                    >
                      Add Question
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="container-ins-exam">
          <form action="" onSubmit={formSubmit}>
            <input
              type="text"
              name="examname"
              placeholder="Enter the exam name"
              onChange={handleInput}
            />
            <input
              type="text"
              name="time"
              placeholder="Enter duration"
              onChange={handleInput}
            />
            <button type="submit">Add exam</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addexamins;
