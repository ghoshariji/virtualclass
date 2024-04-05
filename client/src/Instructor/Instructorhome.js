import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../image/first.jpg";
import Insnav from "../navbar/Insnav";
import Foot from "../footer/Foot";
import "../customcss/form.css";
const Instructorhome = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
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
        "https://virtualclass-yz7w.onrender.com/api/instructor/signup",
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
        "https://virtualclass-yz7w.onrender.com/api/instructor/login",
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
          `https://virtualclass-yz7w.onrender.com/api/instructor/get-ins-info?insId=${insID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (resData.status === 200 && resData.data) {
          if (resData.data.isInstruct) {
            alert("Admin login");
            navigate(`/afterloginins?name=${resData.data.email}&id=${insID}`);
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
      <Insnav />

      <div
        className="container-instructor"
        style={{
          marginTop: "10rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div class="form-box">
          <form action="" onSubmit={submitForm}>
            <h3
              style={{
                color: "wheat",
                textAlign: "center",
                fontSize: "2.5rem",
              }}
            >
              Apply a Instructor
            </h3>
            <div class="inputBox">
              <input
                type="text"
                name="email"
                placeholder="Enter name"
                onChange={handleInput}
                value={post.name}
              />
              <span>Username</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleInput}
                value={post.password}
              />
              <span>Password</span>
              <i></i>
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>

        <div class="form-box">
          <form action="" onSubmit={submitFormLogin}>
            <h3
              style={{
                color: "wheat",
                textAlign: "center",
                fontSize: "2.5rem",
              }}
            >
              Login here
            </h3>
            <div class="inputBox">
              <input
                type="text"
                name="email"
                placeholder="Enter name"
                onChange={handleInput1}
                value={loginData.name}
              />
              <span>Username</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleInput1}
                value={loginData.password}
              />
              <span>Password</span>
              <i></i>
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default Instructorhome;
