import React, { useEffect, useState } from "react";
import axios from "axios";
import Afternavabr from "./Afternavabr";
import { useNavigate } from "react-router-dom";
import Finalnavbar from "../navbar/Finalnavbar";

const Addexam = () => {
  const params = new URLSearchParams(document.location.search);
  const className = params.get("class");
  const [prevExam, setprevExam] = useState([]);
  const [module, setModule] = useState({
    name: "",
    img: "",
    author: "",
  });

  const navigate = useNavigate();
  const [post, setPost] = useState({
    examname: "",
    time: "",
    questionSet: [],
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const submitExam = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response  = await axios.post(
        "http://localhost:7000/api/exam/addexam",
        post,
        config
      );
      alert("Exam Added Successfully");
      setPost({
        examname: " ",
        time: " ",
      });
    } catch (error) {
      console.log("Error for the add exam name page error" + error);
    }
  };
  const handleModule = (event) => {
    setModule({ ...module, [event.target.name]: event.target.value });
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
        name: " ",
        img: " ",
        author: " ",
      });
    } catch (error) {
      console.log("Error from admin page send data " + error);
    }
  };
  const deletExam = async(examName) =>{
    try {
      const response = axios.delete(`http://localhost:7000/api/deleteexam/${className}?examname=${examName}`)
      alert("Exam deleted")
    } catch (error) {
      console.log("Error from delete exam" + error
      )
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.get("http://localhost:7000/api/exam/getexam", config);
        setprevExam(data.data); // Use data.data directly
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching exam data: ", error);
      }
    };
  
    fetchData(); // Call the fetchData function
  }, []);
  
  return (
    <div>
    <Finalnavbar />
      <h3>Set up question or module for {className}</h3>
      <h2>All exam List</h2>
      {
        prevExam.map((val,ind)=>{
            return <div key={ind}>
                <p>{val.examname}</p>
                <p>{val.time}</p>
                <button  onClick={()=>navigate(`/setquestion?class=${className}&exam=${val.examname}`)}>Add Question</button>
                <button onClick={()=>deletExam(val.examname)}>Delete Exam</button>
            </div>
        })
      }
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", marginTop: "10rem" }}
      >
        <form action="" onSubmit={submitExam}>
          <input
            type="text"
            name="examname"
            placeholder="Enter the exam name"
            value={post.examname}
            onChange={handleInput}
          />
          <input
            type="text"
            name="time"
            placeholder="Enter time duration"
            value={post.time}
            onChange={handleInput}
          />
          <button type="submit">Add Exam</button>
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

export default Addexam;
