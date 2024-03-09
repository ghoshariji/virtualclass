import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      const { data } = await axios.post(
        "http://localhost:7000/api/user/login",
        post,
        config
      );

      console.log(data.userId);

      // Check if the userId is available in the response
      if (data.userId) {
        localStorage.setItem("userInfo", JSON.stringify(data));

        const token = data.token;
        const userId = data.userId;

        const response = await axios.get(
          `http://localhost:7000/api/user/get-user-info?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200 && response.data) {
          console.log(response.data);
          console.log(response.data.name);
          if (response.data.isAdmin) {
            toast.success("Login successful", {
              position: "top-center",
            });
            navigate(`/afteradmin?name=${response.data.name}`);
          } else {
            toast.success("Login successful", {
              position: "top-center",
            });
            navigate(`/afterlogin?name=${response.data.name}`);
          }
        } else {
          toast("Login failed", {
            position: "top-center",
          });
        }
      } else {
        toast("Login failed", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast("Login failed", {
        position: "top-center",
      });
      console.log("Error from login page " + error);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
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
