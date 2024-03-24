import { useState } from "react";
import React from 'react';
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const styles = {
    body: {
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(45deg, #6D77E3, #9AABFF)',
    },
    loginContainer: {
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '400px',
      maxWidth: '80%',
      textAlign: 'center',
      padding: '30px',
      animation: 'fadeIn 1s ease-in-out',
    },
    loginContainerH2: {
      color: '#333',
      marginBottom: '20px',
    },
    loginForm: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formGroup: {
      marginBottom: '20px',
      width: '100%',
    },
    formGroupLabel: {
      display: 'block',
      marginBottom: '8px',
      color: '#555',
      fontWeight: 'bold',
    },
    formGroupInput: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    formGroupButton: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#6D77E3',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease-in-out',
    },
    formGroupButtonHover: {
      backgroundColor: '#4750bd',
    },
    keyframesFadeIn: {
      from: {
        opacity: 0,
        transform: 'translateY(-20px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  };
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
    </div>
  );
};

export default Login;
