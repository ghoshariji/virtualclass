import { useState } from "react";
import React from 'react';
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../customcss/login.css';
import { FaUser, FaLock } from "react-icons/fa";
const LoginForm = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    finally {
      setLoading(false);
    }
  };
  return (
    <div className="body">


    <div className='wrapper'>
      <form action='' onSubmit={submitHandle}>
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' name='email' onChange={handleInput} value={post.email}/>
          <FaUser className='icon'/>
        </div>
        
        
      <div className='input-box'>
        <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} value={post.password}/>
        <FaLock className='icon'/>
      </div>

      <div className='remenber-forgot'>
        <label><input type='checkbox'/>Remenber me</label>
        <a href='#'> Forgot password</a>
      </div>

      <button type='submit'>Login</button>
      
        <div className='register-link'>
          <p>Don't have an account ? <a href='#'>Register</a> </p>
        </div>

      </form>
    </div>


    </div>
  );
}

export default LoginForm;