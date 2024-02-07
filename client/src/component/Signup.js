import React, { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";

const Signup = () => {
  const [post, setPost] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
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
        "http://localhost:7000/api/user/signup",
        post,
        config
      );
      alert("Signup completed");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      alert("Signup failed");
      console.log("Error from signup page" + error);
    }
  };

  return (
    <div className="signup-container">
      <Navbar />
      <div className="container-lg">
        <form onSubmit={submitHandle} className="signup-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Enter your name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter name"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Enter email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
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
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Enter confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              placeholder="Enter confirm password"
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
