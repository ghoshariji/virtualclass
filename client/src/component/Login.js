import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    email: "",
    password: "",
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
      console.log(post);
      const { data } = await axios.post(
        "http://localhost:7000/api/user/login",
        post,
        config
      );
      alert("Login successfully");
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/afterlogin");
    } catch (error) {
      alert("Login failed");
      console.log("Error from login page" + error);
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="container-lg">
        <form onSubmit={submitHandle} className="login-form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Enter email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Enter Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
