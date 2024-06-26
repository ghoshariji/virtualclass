import React, { useState } from "react";
import axios from "axios";
import "../customcss/signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Beforehome from "../pages/Beforehome";
import Beforelogin from "../navbar/Beforeloginnav";

const Signup = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
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
        `${process.env.REACT_APP_API_URL}/api/user/signup`,
        //"http://localhost:7000/api/user/signup",
        post,
        config
      );
      toast.success("Signup complete", {
        position: "top-center",
      });
      navigate("/");
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
    } catch (error) {
      toast.error("Signup failed", {
        position: "top-center",
      });
      // console.log("Error from signup page" + error);
    }
  };

  return (
    <>
      <div className="body">
        <ToastContainer />
        <div className="wrapper">
          <form action="" onSubmit={submitHandle}>
            <h1>Signup here...</h1>
            <div className="input-box">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter name"
                onChange={handleInput}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={handleInput}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={handleInput}
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                className="form-control"
                id="cpassword"
                name="about"
                placeholder="About yourself"
                onChange={handleInput}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            <div className="register-link">
              <p>
                Already have an account ? <a href="/">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
