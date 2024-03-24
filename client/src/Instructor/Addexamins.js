import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Afternavabr from "../afterlogin/Afternavabr";


const Addexamins = () => {
  const quesParam = new URLSearchParams(document.location.search);
  const examName = quesParam.get("name");
  const navigate = useNavigate()
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
    <div>
        <Afternavabr />
        <div className="container-exam-list">
            {
                exam.map((val,ind)=>{
                    return <div key={ind}>
                        <p>{val.examname}</p>
                        <p>{val.time}</p>
                        <button onClick={()=>navigate(`/addquesins?examname=${val.examname}&id=${id}&subname=${examName}`)}>Add Question</button>
                    </div>
                })
            }
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
  );
};

export default Addexamins;
