import React, { useEffect, useState } from "react";
import Afternavabr from "../afterlogin/Afternavabr";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const AfterloginHomeins = () => {
  const queParams = new URLSearchParams(document.location.search);
  const [allsub,setAllsub] = useState([])
  const navigate = useNavigate()
  const nameIns = queParams.get("name");
  const userId = queParams.get("id");
  const [post, setPost] = useState({
    subjectname: "",
    about: "",
    Examname:[],
   
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const submitModule = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `http://localhost:7000/api/instructor/addclass?id=${userId}`,
        post,
        config
      );
      alert("added successfully");
    } catch (error) {
      console.log("Error from the Instructor module added time" + error);
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
          `http://localhost:7000/api/instructor/get-class-admin?userId=${userId}`,
          config
        );
        console.log(response.data.data);
        setAllsub(response.data.data)
      } catch (error) {
        console.log("Error from the admin getting data" + error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Afternavabr />

      <h5>Hello {nameIns}</h5>
      <div className="container-admin-class">
        {
          allsub.map((val,ind)=>{
            return <div key={ind}>
              <p>{val.subjectname}</p>
              <p>{val.about}</p>
              <button onClick={()=>navigate(`/addexamins?name=${val.subjectname}&id=${userId}`)}>Change Module</button>
              <br/>
            </div>
          })
        }
      </div>
      <div
        className="container-inshome"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form action="" onSubmit={submitModule}>
          <input
            type="text"
            name="subjectname"
            placeholder="Enter the subject name"
            onChange={handleInput}
          />
          <input
            type="text"
            name="about"
            placeholder="Enter about the subject"
            onChange={handleInput}
          />
          <button type="submit">Submit Subject</button>
        </form>
      </div>
    </div>
  );
};

export default AfterloginHomeins;
