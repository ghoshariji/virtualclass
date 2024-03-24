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
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' name='username' />
          <FaUser className='icon'/>
    <div style={styles.body}>
      <style>
        {`
          @keyframes fadeIn {
              from {
                  opacity: 0;
                  transform: translateY(-20px);
              }
              to {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
        `}
      </style>
      <ToastContainer />
      <Navbar />
        <div style={styles.loginContainer}>
          <h2 style={styles.loginContainerH2}>Login</h2>
          <form style={styles.loginForm} onSubmit={submitHandle}>
            <div style={styles.formGroup}>
              <label htmlFor="username" style={styles.formGroupLabel}>
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="email"
                required
                style={styles.formGroupInput}
                onChange={handleInput}

              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.formGroupLabel}>
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                style={styles.formGroupInput}
                onChange={handleInput}
              />
            </div>
            <div style={styles.formGroup}>
              <button
                style={styles.formGroupButton}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    styles.formGroupButtonHover.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor =
                    styles.formGroupButton.backgroundColor)
                }
                disabled={loading}
              >
              {loading ? "Logging in..." : "Login"}
              </button>
              <button onClick={()=>navigate("/enteremail")}>Forgot password ? Go to</button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
        
        
      <div className='input-box'>
        <input type="password" placeholder='Enter Password' name='password' />
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
