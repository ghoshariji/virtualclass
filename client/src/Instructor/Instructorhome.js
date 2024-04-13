import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../image/first.jpg";
import Insnav from "../navbar/Insnav";
import Foot from "../footer/Foot";
import "../customcss/form.css";
import { ToastContainer, toast } from "react-toastify";
import Inshomenav from "../navbar/Inshomenav";
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
      toast.success("Apply succesfully", {
        position: "top-center",
      });
    } catch (error) {
      toast.success("Error to send data", {
        position: "top-center",
      });
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
      setId(response.data.insID);
      if (response.data.insID) {
        localStorage.setItem("insInfo", JSON.stringify(response.data));
        const insID = response.data.insID;
        const token = response.data.token;
        localStorage.setItem("instoken",token)
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
            toast.success("Login complete", {
              position: "top-center",
            });
            setTimeout(() => {
              navigate(`/afterloginins?name=${resData.data.email}&id=${insID}`);
              window.location.reload()
            }, 1000);
           
          } else {
            toast.success("Login failed", {
              position: "top-center",
            });
           
          }
        }
        else{
            toast.error("Login failed", {
              position: "top-center",
            });
        }
      }
    } catch (error) {
      toast.error("Login failed", {
        position: "top-center",
      });
    }
  };
  return (
    <div>
    <Inshomenav/>
<ToastContainer/>
<div   style={{
          marginTop: "10rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems:'center',
        
        }}>
      <div
        className="container-instructor"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems:'center',
         margin:'2rem',
         padding:'3rem'
        
        }}
      >
        <div class="form-box" style={{margin:'2rem'}}>
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
              <span style={{fontSize:'12px'}}>Username</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleInput}
                value={post.password}
                style={{fontSize:'12px'}}
              />
              <span style={{fontSize:'12px'}}>Password</span>
              <i></i>
            </div>
            <input type="submit" value="Send Data" style={{fontSize:'12px'}}/>
          </form>
        </div>

        <div class="form-box" style={{margin:'2rem'}}>
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
              <span style={{fontSize:'12px'}}>Username</span>
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
              <span style={{fontSize:'12px'}}>Password</span>
              <i></i>
            </div>
            <input type="submit" value="Login" style={{fontSize:'12px'}}/>
          </form>
        </div>
      </div>
      </div>
      <Foot />
    </div>
  );
};

export default Instructorhome;
