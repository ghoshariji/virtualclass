import React, { useState } from "react";
import Afternavabr from "../afterlogin/Afternavabr";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Finalnavbar from "../navbar/Finalnavbar";
import img from "../image/first.jpg"

const Instructorhome = () => {
  const navigate = useNavigate();
  const [id,setId] = useState("")
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const [post, setPost] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const handleInput1 = (event) => {
    setloginData({ ...loginData, [event.target.name]: event.target.value });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:7000/api/instructor/signup",
        post,
        config
      );
      alert("data send succesfully");
    } catch (error) {
      console.log("Error from the instructor signup page" + error);
    }
  };
  const submitFormLogin = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:7000/api/instructor/login",
        loginData,
        config
      );
      console.log(response.data.insID);
      setId(response.data.insID);
      if (response.data.insID) {
        localStorage.setItem("insInfo", JSON.stringify(response.data));
        const insID = response.data.insID;
        const token = response.data.token;

        const resData = await axios.get(
          `http://localhost:7000/api/instructor/get-ins-info?insId=${insID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (resData.status === 200 && resData.data) {
          if (resData.data.isInstruct) {
            alert("Admin login");
         navigate(`/afterloginins?name=${resData.data.email}&id=${insID}`)
          } else {
            alert("You have no permission for the instrcutor login");
          }
        }
      }
    } catch (error) {
      console.log("Error from the Instructor login" + error);
    }
  };
  return (
    <div>
      <Finalnavbar />
      
      <div className="container-instructor" style={{marginTop:"10rem"}}>
      <h3>Send your Details</h3>
        <form action="" onSubmit={submitForm}>
          <input
            type="text"
            name="email"
            placeholder="Enter name"
            onChange={handleInput}
            value={post.name}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleInput}
            value={post.password}
          />
          <button type="submit">Send Us</button>
        </form>
      </div>
      <h3>Login </h3>
      <div className="container-instructor">
        <form action="" onSubmit={submitFormLogin}>
          <input
            type="text"
            name="email"
            placeholder="Enter name"
            onChange={handleInput1}
            value={loginData.name}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleInput1}
            value={loginData.password}
          />
          <button type="submit">Send Us</button>
        </form>
      </div>
    </div>
  );
};

export default Instructorhome;
